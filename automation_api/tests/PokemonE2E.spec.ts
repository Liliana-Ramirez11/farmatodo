import { test, expect } from '@playwright/test';
import { PokeApiClient } from '../services/pokeApiClient';
import { normalizeUrl } from '../helpers/normalizeUrl';

test('flujo E2E Pokémon: validar URLs encadenadas', async ({ request, baseURL }) => {
  const pokeApi = new PokeApiClient(request, baseURL!);

  const pokemonResponse = await pokeApi.getPokemonByName('squirtle');
  const pokemonBody = await pokemonResponse.json();

  const speciesUrlFromPokemon = pokemonBody.species.url;

  const speciesResponse = await pokeApi.getPokemonSpecies(7);
  const executedSpeciesUrl = speciesResponse.url();

  expect(normalizeUrl(executedSpeciesUrl))
    .toBe(normalizeUrl(speciesUrlFromPokemon));

  const speciesBody = await speciesResponse.json();
  const evolutionUrlFromSpecies = speciesBody.evolution_chain.url;

  const evolutionResponse = await pokeApi.getPokemonEvolution(3);
  const executedEvolutionUrl = evolutionResponse.url();

  expect(normalizeUrl(executedEvolutionUrl))
    .toBe(normalizeUrl(evolutionUrlFromSpecies));

  const evolutionBody = await evolutionResponse.json();
  expect(evolutionBody.chain.species.name).toBe('squirtle');
});