import React from "react";
import { Route, Switch } from 'react-router-dom'
import Study from "./Study";
import DeckSreen from "./DeckScreen";
const Main = () => {
    // /decks/new
    // /decks/:deckId
    return (
        <Switch>
            <Route path="/decks/:deckId">
                <DeckSreen />
            </Route>
            <Route path="/decks/:deckId/study">
                <Study />
            </Route>
        </Switch>
    )
}


export default Main