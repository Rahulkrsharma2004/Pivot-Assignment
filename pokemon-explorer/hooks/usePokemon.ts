// hooks/usePokemon.ts

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Pokemon, PokemonApiResponse } from '../utils/types';

const fetchPokemon = async (): Promise<Pokemon[]> => {
  const response = await axios.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
  return response.data.results.map((pokemon, index) => ({
    id: index + 1,
    name: pokemon.name,
    types: [], // You can add logic to fetch types if needed
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  }));
};

export const usePokemon = () => {
  return useQuery<Pokemon[], Error>({
    queryKey: ['pokemon'],
    queryFn: fetchPokemon
  });
};
