import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import { getPokemon, getAllPokemon } from './services/pokemon';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
    }
    fetchData();
  }, [])

  const next = async () => {
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }

  const prev = async () => {
    if (!prevUrl) return;
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <>
      <Navbar />
      <div>
        <div className="btn">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
        <div className="grid-container">
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />
          })}
        </div>
        <div className="btn">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
