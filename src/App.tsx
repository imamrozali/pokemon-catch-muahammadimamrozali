import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListPokemon from './pages/ListPokemon';
import DetailPokemon from './pages/DetailPokemon';
import React, { Fragment } from "react";

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ListPokemon} />
                    <Route exact path="/my-pokemon" />
                    <Route exact path="/detail-pokemon/:name" component={DetailPokemon} />
                    <Route path="/" component={ListPokemon} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}

export default App