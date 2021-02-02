interface Sprite {
  front_default: string;
}

export interface Pokemon {
  species: Species;
  height: number;
  sprites: Sprite;
}

export interface Species {
  url: string;
  name: string;
}
