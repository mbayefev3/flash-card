import React from 'react'
import { Link, Route } from 'react-router-dom'
const Decks = ({ availableDecks, handleDeleteDeck }) => {


    const deckCards = availableDecks.map(({ name, description, id }) => {
        return (
            <div className="card" key={id}>
                <div className="card-header">
                    {name}
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <Link to={`/decks/${id}`}>
                        <button className="btn btn-primary">View</button>

                    </Link>
                    <Link to={`/decks/${id}/study`}>
                        <button className="btn btn-primary">Study</button>

                    </Link>
                    <button className="btn btn-primary" onClick={() => handleDeleteDeck(id)}>Delete</button>

                </div>
            </div >
        )
    })

    return (

        <>
            {availableDecks.length === 0 ? <h1>...Loading</h1> : deckCards}
        </>
    )



}


export default Decks