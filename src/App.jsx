
import React from 'react';
import Form from './Components/Form/Form';
import PokeImage from './Components/PokeImage/PokeImage';
import PokeDetails from './Components/PokeDetails/PokeDetails';
import PokeAttributes from './Components/PokeAttributes/PokeAttributes';

const App = () => {
  return (
    <div className='App flex items-center justify-center min-h-screen'>
      <div className="PokeDex">
        <h1 className='title text-4xl font-bold font-mono'>Poke-dex</h1>
        <p>Poke API will be here soon</p>
        <div className="container grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-4 p-4">
          <Form />
          <PokeImage />
          <PokeAttributes />
          <PokeDetails />
        </div>
      </div>
    </div>
  )
}

export default App;
