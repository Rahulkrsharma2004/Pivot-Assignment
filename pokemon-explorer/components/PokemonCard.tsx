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
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={sprite} alt={name} className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-center text-2xl font-bold capitalize mb-2">{name}</h2>
      <p className="text-center text-gray-500 mb-4">ID: {id}</p>
      <div className="text-center space-x-2">
        {types.map((type) => (
          <span
            key={type}
            className="inline-block bg-indigo-200 text-indigo-700 rounded-full px-3 py-1 text-sm font-semibold"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
