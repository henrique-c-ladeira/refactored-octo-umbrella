import axios from 'axios';

type DataFetchType = {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonListReponse[];
};

type PokemonListReponse = {
  name: string;
  url: string;
};

export const fetchPokemonList: () => Promise<string[]> = async () => {
  const { data } = await axios.get<DataFetchType>(
    'https://pokeapi.co/api/v2/pokemon?limit=400',
  );
  return data.results.map((item: PokemonListReponse) => item.name);
};
