import { PokeApiClient } from '../services/pokeApiClient';

export async function getSpeciesWeight(pokeApi: PokeApiClient, names: string[]) {
  const speciesData: { name: string; weight: number }[] = [];

  for (const name of names) {
    const response = await pokeApi.getPokemonByName(name);
    const body = await response.json();
    speciesData.push({ name, weight: body.weight });
  }

  return speciesData;
}