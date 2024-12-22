// import Image from 'next/image';
import React from 'react';

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const typeColors: { [key: string]: string } = {
  grass: 'bg-green-200',
  fire: 'bg-red-200',
  water: 'bg-blue-200',
  poison: 'bg-purple-200',
  flying: 'bg-gray-200',
  electric: 'bg-yellow-200',
  bug: 'bg-lime-200',
  // Add other types as needed
};

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, types, sprite }) => {
  return (
    <div className="bg-yellow-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={sprite}
        alt={name}
        className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-yellow-300 transform hover:rotate-6 transition-transform duration-300 ease-in-out"
      />
      <p className="text-center text-gray-700 mb-2">ID: {id}</p>
      <h2 className="text-center text-2xl font-bold capitalize text-yellow-700 mb-4">{name}</h2>
      <div className="text-center space-x-2">
        {types.map((type) => (
          <span
            key={type}
            className={`inline-block ${typeColors[type] || 'bg-gray-200'} text-black rounded-full px-3 py-1 text-sm font-semibold transform hover:scale-110 transition-transform duration-300 ease-in-out`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
