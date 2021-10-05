import { storeAppActions, storePokemons } from "./store.type"
import { graphqlPokemons } from '../graphql/pokemons'
import { AppState } from './app.state'

export const Actions = (state: AppState, dispatch: React.Dispatch<storeAppActions>) => {

    const fetchPokemons = async (offset: number, limit: number) => {
        const resultPokemons = await graphqlPokemons(offset, limit)
        if (!resultPokemons.data) {
            return false
        }
        dispatch({ type: "SET_POKEMON", pokemons: resultPokemons.data })
        return true
    }

    const addToMyPokemon = (pokemon: storePokemons) => {
        const nicknameExist = state.myPokemon.find((item) => {
            return (item.nickname ?? "").toLowerCase() === (pokemon.nickname ?? "").toLowerCase()
        })
        if (nicknameExist) {
            return false
        }
        dispatch({ type: "ADD_TO_MY_POKEMON", pokemon: pokemon })
        return true
    }

    const releaseMyPokemon = (pokemon: storePokemons) => {
        dispatch({ type: "RELEASE_MY_POKEMON", pokemon: pokemon })
    }

    return {
        fetchPokemons,
        addToMyPokemon,
        releaseMyPokemon,
    }
}
