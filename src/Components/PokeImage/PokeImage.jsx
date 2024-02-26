import React from 'react'

const PokeImage = () => {
  return (
    <div className='PokeImage bg-slate-900 md:col-span-3 md:row-span-4 md:col-start-4 md:row-start-1'>
        <h1 className="pokeName">PokeName:</h1>
        <img className='Image w-[300px] ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" alt="pokeImage" />
    </div>
  )
}

export default PokeImage