import { storageGetMyPokemon } from './storage.pokemon'
import React, { createContext, useReducer } from "react";
import { storePokemons, storeAppActions } from './store.type'
import { appReducer } from './reducer'

export type AppState = {
    showMyPokemon: boolean;
    listPokemon: storePokemons[]
    myPokemon: storePokemons[]
}

const initialState: AppState = {
    showMyPokemon: false,
    listPokemon: [],
    myPokemon: storageGetMyPokemon(),
}

const AppContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<storeAppActions> | any;
}>({
    state: initialState,
    dispatch: () => null,
})

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState)
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
