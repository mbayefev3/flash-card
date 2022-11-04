import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import AddCard from './AddCard'
import NotFound from '../../NotFound'
const CardRoutes = () => {

    return (
        <div>

            <Switch>
                <Route path="/decks/:deckId/cards/new" exact>
                    <AddCard profile="Add Card" />
                </Route>
                <Route path='/decks/:deckId/cards/:cardId/edit'>
                    <AddCard profile="Edit Card" edit='edit' />
                </Route>

            </Switch>
        </div>
    )
}


export default CardRoutes