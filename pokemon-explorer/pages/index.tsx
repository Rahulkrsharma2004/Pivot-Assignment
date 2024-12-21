import React from 'react';
import PokedexGrid from '../components/PokedexGrid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Home: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Pokemon Explorer</h1>
        <PokedexGrid />
      </div>
    </QueryClientProvider>
  );
};

export default Home;
