import React, { useState, useEffect } from 'react'; // Import useState and useEffect from React
import axios from 'axios';

const PokeImage = (image) => { // Change (pokeImage) to ()
  
  return (
    <div className='PokeImage bg-slate-900 md:col-span-3 md:row-span-4 md:col-start-4 md:row-start-1'>
        <div className="container flex flex-col justify-center items-center">
          <h1 className="pokeName">PokeName: </h1>
          {/* Add null check to prevent accessing undefined properties */}
          {poke && poke.sprites && <img className='Image w-[300px] ' src={image} alt="pokeImage" />}
       </div>
   </div>
  )
}

export default PokeImage;
