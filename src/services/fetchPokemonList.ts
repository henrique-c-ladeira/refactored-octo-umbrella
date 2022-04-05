type PokemonListReponse = {
  name: string;
  url: string;
};

export const fetchPokemonList: () => Promise<string[]> = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const responseJson = await response.json();
  return responseJson.results.map((item: PokemonListReponse) => item.name);
};
