import React, { useEffect, useState } from 'react';

const Data = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = 'https://pokeapi.co/api/v2/pokemon';
      try {
        let res = await fetch(url);
        let data = await res.json();
        setPokemon(data.results);
      } catch (err) {
        console.log('Something went wrong', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='Data'>
      <h1>Data</h1>
      <ul>
        {pokemon.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
