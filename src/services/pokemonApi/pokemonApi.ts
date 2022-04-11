import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  PokemonDetailsParams,
  PokemonDetailsResponse,
  PokemonDetailsTransformedResponse,
} from './types/getPokemonDetails';
import {
  PokemonListParams,
  PokemonListResponse,
  PokemonListTransformedResponse,
} from './types/getPokemonList';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonList: builder.query<
      PokemonListTransformedResponse,
      PokemonListParams
    >({
      query: limit => `pokemon?limit=${limit ?? 151}`,

      transformResponse: (response: PokemonListResponse) =>
        response.results.map(item => ({
          name: item.name,
          spriteUrl: `https://img.pokemondb.net/sprites/home/normal/${item.name}.png`,
        })),
    }),

    getPokemonDetails: builder.query<
      PokemonDetailsTransformedResponse,
      PokemonDetailsParams
    >({
      query: pokemonName => `pokemon/${pokemonName}`,

      transformResponse: (response: PokemonDetailsResponse) => ({
        name: response.name,
        types: response.types.map(item => item.type.name),
        stats: response.stats.map(item => ({
          name: item.stat.name,
          value: item.base_stat,
        })),
        imageUrl: response.sprites.other['official-artwork'].front_default,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemonApi;
