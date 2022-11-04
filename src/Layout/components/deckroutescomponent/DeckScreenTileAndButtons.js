import React from 'react'

import { HomeButton, StudyButton, EditButton, AddCardsButton, DeleteButton } from '../homepagecomponent/DecksButton'
import { Link } from 'react-router-dom'

const DeckScreenTitleAndButtons = ({ name, description, deckId, handleDeleteDeck }) => {

    // ()
    return (
        <div>

            <div className="card-header">
                <Link to="/">
                    <HomeButton />

                </Link>
                <p style={{ color: 'blue' }}>{name}</p>
            </div>

            <div className="card-body" >
                <p className="card-text">{description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={`/decks/${deckId}/edit`}>

                        <EditButton />
                    </Link>
                    <Link to={`/decks/${deckId}/study`}>
                        <StudyButton />

                    </Link>
                    <Link to={`/decks/${deckId}/cards/new`} >
                        <AddCardsButton />
                    </Link>


                    <DeleteButton deckId={deckId} handleDeleteDeck={handleDeleteDeck} />

                </div>

            </div>

        </div>
    )
}


export default DeckScreenTitleAndButtons