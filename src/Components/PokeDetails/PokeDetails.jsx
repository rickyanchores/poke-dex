import React from 'react'

const PokeDetails = ({name,id}) => {
  return (
    <div className='PokeDetails bg-slate-900 md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-5 flex justify-center items-center'>
        <h1>Name: {name}</h1>
        <p>ID: {id}</p>
    </div>
  )
}

export default PokeDetails