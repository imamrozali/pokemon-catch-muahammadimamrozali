export type storeAppActions =
    | { type: "SET_POKEMON"; pokemons: storePokemons[] }
    | { type: "ADD_TO_MY_POKEMON"; pokemon: storePokemons }
    | { type: "RELEASE_MY_POKEMON"; pokemon: storePokemons }

export interface storePokemon {
    id: number
    name: string
    image: string
    height: number
    weight: number
    types: string[]
    stats: storePokemonStats[]
}

export interface storePokemons {
    id: number
    name: string
    image: string
    nickname?: string
}
export interface storePokemonStats {
    base_stat: number
    name: string
}

