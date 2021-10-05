import client from './client'
import { queryPokemons, queryPokemon } from './queries'
import { storePokemons, storePokemon } from '../utils/store.type'

export const graphqlPokemons = async (offset: number, limit: number) => {
    const { data } = await client.query({
        query: queryPokemons,
        variables: {
            offset: offset,
            limit: limit,
        },
    })
    if (data) {

        const resultPokemons: storePokemons[] = data.pokemons.results.map((pokemon: any) => {
            const resultPokemon: storePokemons = {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.image,
            }
            return resultPokemon
        })
        return {
            ok: true,
            data: resultPokemons,
        }
    } else {
        return {
            ok: false,
        }
    }
}
export const graphqlPokemonDetail = async (name: string) => {

    const { data: dataPokemon } = await client.query({
        query: queryPokemon,
        variables: {
            name: name,
        },
    })

    if (!dataPokemon) {
        return {
            ok: false,
        }
    }

    const stats = dataPokemon.pokemon.stats.map((item: any) => {
        const stat = {
            name: item.stat.name,
            base_stat: item.base_stat
        }
        return stat
    })
    
    const resultPokemon: storePokemon = {
        id: dataPokemon.pokemon.id,
        name: name,
        height: dataPokemon.pokemon.height,
        weight: dataPokemon.pokemon.weight,
        image: dataPokemon.pokemon.sprites.front_default,
        types: dataPokemon.pokemon.types.map((item: any) => item.type.name),
        stats: stats,
    }

    return {
        ok: true,
        data: resultPokemon,
    }
}
