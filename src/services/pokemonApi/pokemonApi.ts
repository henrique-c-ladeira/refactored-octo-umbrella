import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonListResponseType } from './pokemonApiTypes';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonList: builder.query<string[], string | number>({
      query: limit => `pokemon?limit=${limit ?? 151}`,
      transformResponse: (response: PokemonListResponseType) =>
        response.results.map(item => item.name),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonListQuery } = pokemonApi;
