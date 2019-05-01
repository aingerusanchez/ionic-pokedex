/** Interfaz de los resultados de la lista */
export interface PokemonItem {
    /** Nombre del Pokemon */
    name: string;
    /** URL de la API con el detalle del Pokemon */
    url: string;
}

/** Interfaz de la lista de Pokemon */
export interface PokedexResponse {
    /** Lista paginada de Pokemon */
    results: PokemonItem[];
    /** Total de Pokemon */
    count: number;
    /** Página siguiente */
    next: string;
    /** Página anterior */
    previous: string;
}
