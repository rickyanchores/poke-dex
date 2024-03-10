import React from 'react'
import Data from '../../API/Data'

const Form = () => {

  

  return (
    <div className='Form bg-slate-900 p-4 flex justify-center items-center md:col-span-3 md:row-span-2'>
        <div className="container">
            <input className='' type="text" placeholder='Search Pokemon'/>
            <button className="btn hover:animate-pulse" onClick={() => console.log("Hello")}>Find Poke</button>
        </div>
    </div>
  )
}

export default Form;