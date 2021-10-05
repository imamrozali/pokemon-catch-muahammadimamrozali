import { getStorage, setStorage } from './storage'
import { storePokemons} from './store.type'

const KEY_MY_POKEMON = 'MY_POKEMON'

export const storageGetMyPokemon = (): storePokemons[] => {
    const localData = getStorage(KEY_MY_POKEMON)
    if (localData) {
        return getStorage(KEY_MY_POKEMON)
    } else {
        return []
    }
}

export const storageSetMyPokemon = (data: storePokemons[]) => {
    setStorage(KEY_MY_POKEMON, data)
}