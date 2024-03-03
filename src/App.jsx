
import React from 'react';
import Form from './Components/Form/Form';
import PokeImage from './Components/PokeImage/PokeImage';
import PokeDetails from './Components/PokeDetails/PokeDetails';
import PokeAttributes from './Components/PokeAttributes/PokeAttributes';

const App = () => {
  return (
    <div className='App  flex items-center justify-center min-h-screen'>
      <div className="PokeDex max-w-full">
        <div className="poke-container  grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-4">
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
