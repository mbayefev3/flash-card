import React from "react";
import { Route, Switch } from 'react-router-dom'
import Study from "./Study";
import DeckScreen from "./DeckScreen";
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";
import CardRoutes from "./CardRoutes";
import NotFound from "../../NotFound";
const MainRoutes = () => {
    // /decks/:deckId/cards/new
    // /decks/:deckId/cards/:cardId/edit
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
            <Route path="/decks/:deckId/cards">
                <CardRoutes />
            </Route>

        </Switch>
    )
}




export default MainRoutes