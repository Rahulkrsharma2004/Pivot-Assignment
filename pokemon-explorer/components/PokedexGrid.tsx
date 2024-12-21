// components/PokedexGrid.tsx

import React from 'react';
import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from './PokemonCard';

const PokedexGrid: React.FC = () => {
  const { data: pokemonList, error, isLoading } = usePokemon();

  if (isLoading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">Error loading Pokemon data: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {pokemonList && pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          sprite={pokemon.sprite}
        />
      ))}
    </div>
  );
};

export default PokedexGrid;
