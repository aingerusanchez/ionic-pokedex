export class Pokemon {
    /** ID del pokemon en la Pokedex */
    public id: number;
    /** Nombre del Pokemon */
    public name: string;
    /** URL de la API con el detalle del Pokemon */
    public url: string;
    /** Objeto de imágenes del Pokemon */
    public sprites: { key: string, url: string }[];
    /** Array de tipos del Pokemon */
    public types: { slot: number, type: { name: string, url: string }, icon?: string, color?: string }[];
    /** Array de estadísticas */
    public stats: { base_stats: number, effort: number, stats: { name: string, url: string }, icon?: string };
}
