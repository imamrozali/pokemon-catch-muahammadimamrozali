import { storageSetMyPokemon } from './storage.pokemon'
import { storeAppActions } from './store.type'
import { AppState } from './app.state'

export const appReducer = (state: AppState, action: storeAppActions): AppState => {
    switch (action.type) {
        case "SET_POKEMON": {
            return {
                ...state,
                listPokemon: [...state.listPokemon, ...action.pokemons],
            }
        }
        case "ADD_TO_MY_POKEMON": {
            const resultMyPokemon = [action.pokemon, ...state.myPokemon]
            storageSetMyPokemon(resultMyPokemon)
            return {
                ...state,
                myPokemon: resultMyPokemon,
            }
        }
        case "RELEASE_MY_POKEMON": {
            const resultMyPokemon = state.myPokemon.filter((pokemon) => {
                return pokemon.nickname !== action.pokemon.nickname
            })
            storageSetMyPokemon(resultMyPokemon)
            return {
                ...state,
                myPokemon: resultMyPokemon,
            }
        }
        default:
            return state
    }
}
