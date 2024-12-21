import React from 'react';

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, types, sprite }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={sprite} alt={name} className="w-full h-32 object-cover" />
      <div className="mt-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <p>ID: {id}</p>
        <div className="flex flex-wrap">
          {types.map(type => (
            <span key={type} className="bg-blue-500 text-white px-2 py-1 rounded mr-2 mt-2">
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
