import React from 'react'

const Form = () => {
  return (
    <div className='Form bg-slate-900 p-4 flex justify-center items-center'>
        <div className="container">
            <input type="text" placeholder='Search Pokemon'/>
            <button className="btn">Find Poke</button>
        </div>
    </div>
  )
}

export default Form