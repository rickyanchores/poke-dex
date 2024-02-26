import React from 'react'

const PokeAttributes = () => {
  return (
    <div className='PokeAttributes bg-slate-900 md:col-span-3 md:row-span-4 md:col-start-1 md:row-start-3 flex justify-center items-center'>
        <div className="container ">
        <h1>Poke Attributes</h1>
        <ul>
            <li>HP:</li>
            <li>ATK:</li>
            <li>DIF:</li>
            <li>TYPE:</li>
        </ul>
        </div>
    </div>
  )
}

export default PokeAttributes