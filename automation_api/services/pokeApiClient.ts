import { APIRequestContext } from '@playwright/test';
import { HttpClient } from './httpClient';

export class PokeApiClient {
  private http: HttpClient;

  constructor(request: APIRequestContext, baseUrl: string) {
    this.http = new HttpClient(request, baseUrl);
  }
  async getPokemon() {
    return this.http.get(`/pokemon/`);
  }

  async getPokemonByName(name: string) {
    return this.http.get(`/pokemon/${name}`);
  }

  async getPokemonSpecies(id: number) {
    return this.http.get(`/pokemon-species/${id}`);
  }

  async getPokemonEvolution(id: number) {
    return this.http.get(`/evolution-chain/${id}`);
  }
}