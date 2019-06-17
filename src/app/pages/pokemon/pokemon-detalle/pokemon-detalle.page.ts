import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { environment } from 'src/environments/environment';

import { PokedexService } from './../../../services/pokedex.service';
import { UtilsService } from './../../../shared/utils.service';

// TSLint file rules:
// tslint:disable: no-floating-promises

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.page.html',
  styleUrls: ['./pokemon-detalle.page.scss'],
})
export class PokemonDetallePage implements OnInit {

  public readonly DEBUG = environment.development;
  /** ID del Pokemon */
  public pokemonID: number;
  /** Datos del Pokemon */
  public pokemon: Pokemon;
  /** `string` COD tipo Pokedex del Pokemon  */
  public pokemonCOD: string;
  /** Imagen del Pokemon */
  public pokemonIMG: string;

  private readonly CLASS_NAME = 'PokemonDetallePage';

  constructor(
    public pokedex: PokedexService,
    private activeRoute: ActivatedRoute,
    private utils: UtilsService,
    private translate: TranslateService,
    private router: Router
  ) {
    console.debug(`${this.CLASS_NAME}.constructor()`);
    this.pokemonID = 0;
    this.pokemonCOD = '';
    this.pokemonIMG = '';
  }

  ngOnInit() {
    console.debug(`${this.CLASS_NAME}.ngOnInit()`);
    this.pokemonID = +this.activeRoute.snapshot.paramMap.get('id');
    this.lanzarPokeball();
  }

  /**
   * Navega entre los Pokemon colindantes por ID
   * @param sentido
   * * `prev` para navegar al Pokemon anterior
   * * `next` para navegar al Pokemon siguiente
   */
  public changePokemon = (sentido: string) => {
    if (sentido === 'next' && this.pokemonID < this.pokedex.getTotalPokemon()) {
      this.pokemonID++;
    } else if (sentido === 'prev' && this.pokemonID > 1) {
      this.pokemonID--;
    }
    this.lanzarPokeball();
    // this.router.navigate([`/pokemon-detalle/${this.pokemonID}`]);
  }

  /** Obtiene los datos de un Pokemon */
  private lanzarPokeball = () => {
    console.debug(`${this.CLASS_NAME}.lanzarPokeball(${this.pokemonID})`);
    this.utils.showLoader(`${this.translate.instant('HOME.ESCANEANDO_POKEMON')}...`);

    this.pokedex.getPokemon(this.pokemonID).subscribe(
      (result: Pokemon) => {
        this.pokemon = result;
        this.pokemonCOD = this.pokemon.id.toString().padStart(3, '0');
        this.pokemonIMG = this.pokemon.sprites['front_default'] || '/assets/img/MissingNo.png';
        this.generateIconByType();
        console.log(this.pokemon);
        this.utils.hideLoader();
      },
      (error: any) => {
        const txtError = '¡El Pokemon ha escapado!';
        console.error(txtError);
        throw new Error(txtError);
      }
    );
  }

  /** Genera un icono y un color para cada tipo */
  private generateIconByType = () => {
    console.debug(`${this.CLASS_NAME}.generateIconByType()`);

    this.pokemon.types.forEach(
      (tipo: any) => {
        switch (tipo.type.name) {

          case 'normal':
            tipo.icon = 'at';
            tipo.color = 'medium';
            break;

          case 'fighting':
            tipo.icon = 'fitness';
            tipo.color = 'danger';
            break;

          case 'flying':
            tipo.icon = 'airplane';
            tipo.color = 'logo-twitter';
            break;

          case 'ground':
            tipo.icon = 'paw';
            tipo.color = 'warning';
            break;

          case 'rock':
            tipo.icon = 'apps';
            tipo.color = 'medium';
            break;

          case 'bug':
            tipo.icon = 'bug';
            tipo.color = 'tertiary';
            break;

          case 'ghost':
            tipo.icon = 'logo-snapchat';
            tipo.color = 'tertiary';
            break;

          case 'steel':
            tipo.icon = 'magnet';
            tipo.color = 'medium';
            break;

          case 'fire':
            tipo.icon = 'flame';
            tipo.color = 'danger';
            break;

          case 'water':
            tipo.icon = 'water';
            tipo.color = 'primary';
            break;

          case 'grass':
            tipo.icon = 'leaf';
            tipo.color = 'success';
            break;

          case 'electric':
            tipo.icon = 'flash';
            tipo.color = 'warning';
            break;

          case 'psychic':
            tipo.icon = 'pulse';
            tipo.color = 'tertiary';
            break;

          case 'ice':
            tipo.icon = 'snow';
            tipo.color = 'secondary';
            break;

          case 'dark':
            tipo.icon = 'moon';
            tipo.color = 'dark';
            break;

          case 'fairy':
            tipo.icon = 'color-wand';
            tipo.color = 'tertiary';
            break;

          case 'poison':
            tipo.icon = 'flask';
            tipo.color = 'tertiary';
            break;

          case 'dragon':
            tipo.icon = 'logo-python';
            tipo.color = 'tertiary';
            break;

          default:
            break;
        }
      }
    );
  }

}
