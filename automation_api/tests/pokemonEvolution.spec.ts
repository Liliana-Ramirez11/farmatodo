import { test, expect} from '@playwright/test';
import { PokeApiClient } from '../services/pokeApiClient';
import { extractSpeciesNames } from '../helpers/extractSpeciesNames';
import { getSpeciesWeight } from '../helpers/getSpeciesWeight';
import { alphabeticalOrder } from '../helpers/alphabeticalOrder';


test('validar lista de Pokémon', async ({ request, baseURL }) => {
  const pokeApi = new PokeApiClient(request, baseURL!);
  const response = await pokeApi.getPokemon();
  expect(response.status()).toBe(200);

});

test('validar Pokémon por nombre', async ({ request, baseURL }) => {
  const pokeApi = new PokeApiClient(request, baseURL!);
  const name = 'squirtle';
  const response = await pokeApi.getPokemonByName(name);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.name).toBe(name);
});

test('validar especies de Pokémon', async ({ request, baseURL }) => {
  const pokeApi = new PokeApiClient(request, baseURL!);
  const response = await pokeApi.getPokemonSpecies(7);
  expect(response.status()).toBe(200);

});

test('validar evolución de Pokémon', async ({ request, baseURL }) => {
  const pokeApi = new PokeApiClient(request, baseURL!);
  const response = await pokeApi.getPokemonEvolution(3);
  expect(response.status()).toBe(200);
  const body = await response.json();
  const speciesName = body.chain.species.name;
  expect(speciesName).toBe('squirtle');
});

test('nombres y pesos de evoluciones', async ({ request, baseURL }) => {
  const pokeApi = new PokeApiClient(request, baseURL!);
  const evolutionResponse = await pokeApi.getPokemonEvolution(3);
  const chain = await evolutionResponse.json();
  const names = extractSpeciesNames(chain.chain);
  const speciesData = await getSpeciesWeight(pokeApi, names);
  const sortedSpecies = alphabeticalOrder(speciesData);

  console.log(sortedSpecies);
});