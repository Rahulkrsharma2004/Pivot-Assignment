// components/PokemonCard.tsx

import React from 'react';

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, types, sprite }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={sprite} alt={name} className="w-16 h-16 mx-auto" />
      <h2 className="text-center text-xl font-bold">{name}</h2>
      <p className="text-center">ID: {id}</p>
      <div className="text-center">
        {types.map((type) => (
          <span
            key={type}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
