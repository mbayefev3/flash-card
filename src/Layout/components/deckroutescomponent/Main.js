import React from "react";
import { Route, Switch } from 'react-router-dom'
import Study from "./Study";
import DeckScreen from "./DeckScreen";
import EditDeck from "./EditDeck";
const Main = () => {

    return (
        <Switch>
            <Route path="/decks/:deckId" exact>
                <DeckScreen />
            </Route>
            <Route path="/decks/:deckId/study">
                <Study />
            </Route>
            <Route path="/decks/:deckId/edit">
                <EditDeck />
            </Route>
        </Switch>
    )
}


export default Main