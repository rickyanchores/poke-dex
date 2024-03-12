import React, { useState, useEffect } from 'react'; // Import useState and useEffect from React
import axios from 'axios';

const PokeImage = () => { // Change (pokeImage) to ()
  
  const [poke, setPoke] = useState();

  const fetchData = async () => {
    let url = "https://pokeapi.co/api/v2/pokemon/pikachu/";
    try {
      let res = await axios.get(url); // Pass the URL to axios.get()
      let data = res.data;
      console.log(data);
      setPoke(data);
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='PokeImage bg-slate-900 md:col-span-3 md:row-span-4 md:col-start-4 md:row-start-1'>
        <div className="container flex flex-col justify-center items-center">
          <h1 className="pokeName">PokeName: </h1>
          {/* Add null check to prevent accessing undefined properties */}
          {poke && poke.sprites && <img className='Image w-[300px] ' src={poke.sprites.front_default} alt="pokeImage" />}
       </div>
   </div>
  )
}

export default PokeImage;
