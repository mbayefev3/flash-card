import React from "react";
import { Route, Switch } from 'react-router-dom'
import Study from "./Study";
import DeckSreen from "./DeckScreen";
import CreateDeck from "./CreateDeck";
const Main = () => {

    return (
        <Switch>
            <Route path="/decks/:deckId" exact>
                <DeckSreen />
            </Route>
            <Route path="/decks/:deckId/study">
                <Study />
            </Route>
            <Route path="/decks/:deckId/edit">
                <CreateDeck edit='edit' />
            </Route>
        </Switch>
    )
}


export default Main