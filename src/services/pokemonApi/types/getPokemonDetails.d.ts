export type PokemonDetailsParams = string;

type NameURL = {
  name: string;
  url: string;
};

type Ability = {
  ability: NameURL;
  is_hidden: boolean;
  slot: number;
};

type GameIndex = {
  game_index: number;
  version: NameURL;
};

type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: NameURL;
  version_group: NameURL;
};

type Move = {
  move: NameURL;
  version_group_details: VersionGroupDetails[];
};

type VersionDetails = {
  rarity: number;
  version: NameURL;
};

type HeldItem = {
  item: NameURL;
  version_details: VersionDetails[];
};

type SpriteSet = {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  back_gray?: string;
  back_transparent?: string;
  front_gray?: string;
  front_transparent?: string;
  front_shiny_transparent?: string;
};

type Sprites = SpriteSet & {
  other: {
    dream_world: SpriteSet;
    home: SpriteSet;
    'official-artwork': SpriteSet;
  };
  versions: {
    'generation-i': {
      'red-blue': SpriteSet;
      yellow: SpriteSet;
    };
    'generation-ii': {
      crystal: SpriteSet;
      gold: SpriteSet;
      silver: SpriteSet;
    };
    'generation-iii': SpriteSet;
    'firered-leafgreen': SpriteSet;
    'ruby-sapphire': SpriteSet;
  };
  'generation-iv': {
    'diamond-pearl': SpriteSet;
    'heartgold-soulsilver': SpriteSet;
    platinum: SpriteSet;
  };
  'generation-v': {
    'black-white': SpriteSet & {
      animated: SpriteSet;
    };
  };
  'generation-vi': {
    'omegaruby-alphasapphire': SpriteSet;
    'x-y': SpriteSet;
  };
  'generation-vii': {
    icons: SpriteSet;
    'ultra-sun-ultra-moon': SpriteSet;
  };
  'generation-viii': {
    icons: SpriteSet;
  };
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: NameURL;
};

type Type = {
  slot: number;
  type: NameURL;
};

export type PokemonDetailsResponse = {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrl[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types?: any[]; //@TODO
  species: NameURL;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

type TransformedStat = {
  name: string;
  value: number;
};

export type PokemonDetailsTransformedResponse = {
  name: string;
  types: string[];
  stats: TransformedStat[];
  imageUrl?: string;
};
