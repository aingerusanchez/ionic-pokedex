import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {

  private readonly url = environment.pokedex_api;
  private readonly CLASS_NAME = 'PokedexService';
  private readonly TOTAL_POKEMON = 806;

  constructor(private http: HttpClient) { }

  /** Devuelve todos los Pokemon */
  public catchEmAll = (): Observable<any> => {
    const endpoint = 'pokemon/';
    const url = `${this.url}${endpoint}?limit=${this.TOTAL_POKEMON}&offset=0`;  // Para cargar toda la lista
    console.log(`${this.CLASS_NAME}.catchEmAll(${url})`);
    return this.http.get(url);
  }

  /** Carga una nueva página de Pokemon */
  public loadMore = (url: string) => {
    console.log(`${this.CLASS_NAME}.loadMore(${url})`);
    return this.http.get(url);
  }

  /**
   * Devuelve los datos de un Pokemon
   * @param pokemonID: ID del Pokemon en la Pokedex
   */
  public getPokemon = (pokemonID: number) => {
    const endpoint = 'pokemon/';
    const url = `${this.url}${endpoint}${pokemonID}/`;
    return this.http.get(url);
  }

  public getTotalPokemon = (): number => {
    return this.TOTAL_POKEMON;
  }
}
