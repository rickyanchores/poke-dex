import React, { useState } from 'react';
import PokeImage from './Components/PokeImage/PokeImage';
import PokeDetails from './Components/PokeDetails/PokeDetails';
import PokeAttributes from './Components/PokeAttributes/PokeAttributes';


const App = () => {

  const [pokeName, setPokeName] = useState("");
  const [pokeData,setPokeData] = useState();

  const fetchData = async (name) => {
      let url = `https://pokeapi.co/api/v2/pokemon/${name}/`
      try{
          let res = await axios.get(url)
          let data = res.data
          setPokeData(data)
          console.log(data)
      }catch(err){
          console.log("Something went wrong",err)
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(pokeName.trim() !== "") {
      fetchData(pokeName);
    }
  };
  

  return (
    <div className='App flex items-center justify-center min-h-screen'>
      <div className="PokeDex">
        <h1 className='title text-4xl font-bold font-mono'>Poke-dex</h1>
        <p>Poke API will be here soon</p>
        <div className="poke-container grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-4 p-4">
         <div className="Form bg-slate-900 p-4 flex justify-center items-center md:col-span-3 md:row-span-2">
          <form action="submit" onSubmit={handleSubmit}>
              <input type="text" 
                placeholder='Search Poke' 
                value={pokeName} 
                onChange={(e) => setPokeName(e.target.value)}/>
              <button className='Fetch'>FIND</button>
            </form>
         </div>
          {pokeData && (
            <>
              <PokeImage className="md:col-span-3 md:row-span-4 md:col-start-4 md:row-start-1" image={pokeData.sprites.front_default}/> 
              <PokeAttributes className="md:col-span-3 md:row-span-4 md:col-start-1 md:row-start-3 flex justify-center items-center" hp={pokeData.hp}/>
              <PokeDetails className="md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-5 flex justify-center items-center" name={pokeData.name} id={pokeData.id}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
