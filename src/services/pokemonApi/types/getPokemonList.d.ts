export type PokemonListParams = string | number;

export type PokemonListResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
};

type Pokemon = {
  name: string;
  url: string;
};

export type PokemonTransformedResponse = {
  name: string;
  spriteUrl: string;
};

export type PokemonListTransformedResponse = PokemonTransformedResponse[];
