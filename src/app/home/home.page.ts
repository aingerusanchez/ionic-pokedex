import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { PokedexResponse, PokemonItem } from '../models/pokemon-list.interface';

import { PokedexService } from './../services/pokedex.service';
import { UtilsService } from './../shared/utils.service';

// TSLint file rules:
// tslint:disable: no-floating-promises

export enum ScrollPositionEnum {
  start,
  middle,
  end,
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild('content') private content: any;
  /** Lista cargada de Pokemon */
  private listaPokemon: PokemonItem[];
  public displayPokedex: PokemonItem[];
  /** Total de Pokemon */
  public countPokemon: number;
  /** Booleano activo al cargar datos */
  public isLoading: boolean;
  public scrollPositionEnum = ScrollPositionEnum;
  public position: ScrollPositionEnum;

  /** URL a la siguiente página de Pokemon */
  private nextPage: string;
  private readonly CLASS_NAME = 'HomePage';
  /** Número de Pokemon cargados en la lista */
  private pokemonCargados: number;

  constructor(
    public router: Router,
    public translate: TranslateService,
    private pokedex: PokedexService,
    private utils: UtilsService
  ) {
    console.debug(`${this.CLASS_NAME}.constructor()`);

    this.listaPokemon = [];
    this.countPokemon = 0;
    this.nextPage = '';
    this.pokemonCargados = 0;
    this.isLoading = false;
    this.position = ScrollPositionEnum.start;
  }

  ngOnInit(): void {
    console.debug(`${this.CLASS_NAME}.ngOnInit()`);

    this.cargaInicial();
  }

  /** Carga la lista de Pokemon */
  private cargaInicial = () => {
    console.debug(`${this.CLASS_NAME}.cargaInicial()`);
    this.utils.showLoader(`${this.translate.instant('HOME.ESCANEANDO_POKEMON')}...`);

    this.pokedex.catchEmAll().subscribe(
      (response: PokedexResponse) => {
        console.log(response);
        this.listaPokemon = response.results;
        this.displayPokedex = this.listaPokemon;
        this.countPokemon = response.count;
        this.nextPage = response.next;
        this.pokemonCargados = response.results.length;
        this.utils.hideLoader();
      },
      (error: any) => {
        this.utils.hideLoader();
        throw new Error('No se encuentra ningún Pokemon \_O_/');
      }
    );
  }

  /** Carga la siguiente página de Pokemon */
  public loadNextPokemonPage = (event: any) => {
    console.debug(`${this.CLASS_NAME}.loadNextPokemonPage()`);
    this.utils.showLoader(`${this.translate.instant('HOME.ESCANEANDO_POKEMON')}...`);
    this.pokedex.loadMore(this.nextPage).subscribe(
      (response: PokedexResponse) => {
        console.log(response);
        event.target.complete();
        this.listaPokemon.push(...response.results);
        this.displayPokedex = this.listaPokemon;
        this.nextPage = response.next;
        this.pokemonCargados += response.results.length;
        console.log(`Pokemon cargados: ${this.pokemonCargados}`);
        // Parar de cargar al llegar al máximo
        if (this.listaPokemon.length === this.countPokemon) { event.target.disabled = true; }

        this.utils.hideLoader();
      },
      (error: any) => {
        this.utils.hideLoader();
        throw new Error('No hay más Pokemon \_O_/');
      }
    );
  }

  /** DEBUG: Deshabilita scroll infinita */
  /* public toggleInfiniteScroll = () => {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  } */

  /**
   * Ver el detalle de un Pokemon
   * @param url `string` url para la petición de los datos del Pokemon seleccionado
   */
  public verPokemon = (url: string) => {
    console.debug(`${this.CLASS_NAME}.verPokemon(${url})`);
    this.utils.showLoader(`${this.translate.instant('HOME.CARGANDO_POKEMON')}`);
    const pokemonId = url.split('/')[url.split('/').length - 2];
    // tslint:disable-next-line: no-floating-promises
    this.router.navigate([`/pokemon-detalle/${pokemonId}`]);
  }

  /** Filtra la lista de Pokemon en función del `txtBusqueda` introducido */
  public filtrarPokedex = (txtBusqueda: string) => {
    console.debug(`${this.CLASS_NAME}.filtrarPokedex(${txtBusqueda})`);

    this.displayPokedex = this.listaPokemon.filter((pokemon: PokemonItem) => {
      return pokemon.name.includes(txtBusqueda);
    });
  }

  /** Scrolea al inicio de la lista */
  public scrollToTop = () => {
    console.debug(`${this.CLASS_NAME}.scrollToTop()`);
    this.content.scrollToTop(500);
  }

  /** Scrolea al final de la lista */
  public scrollToBottom = () => {
    console.debug(`${this.CLASS_NAME}.scrollToBottom()`);
    this.content.scrollToBottom(500);
  }

  /** Alterna entre los 2 diferentes idiomas ['es' | 'en'] */
  public toggleLang = () => {
    const currentLang = this.translate.currentLang;

    if (currentLang === 'es') {
      this.translate.use('en')/* .subscribe(() => this.translate.reloadLang('en')) */;
    } else {
      this.translate.use('es')/* .subscribe(() => this.translate.reloadLang('es')) */;
    }
  }

}
