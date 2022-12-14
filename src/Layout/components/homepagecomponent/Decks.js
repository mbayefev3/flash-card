import React from 'react'
import { Link, Route } from 'react-router-dom'
import Loader from './Loader'
import { ViewButton, StudyButton, DeleteButton } from './DecksButton'
const Decks = ({ availableDecks, handleDeleteDeck }) => {


    const decks = availableDecks.map(({ name, description, id, cards }) => {

        // this will give me the valid card to count so i can get the total

        return (
            <div className="card" key={id}>
                <div className="card-header">
                    <h5> {name}</h5>
                    <h5>{cards.length} {'cards'}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    {/* for the button logo */}
                    <div className='button-style' style={{ display: 'flex', justifyContent: "space-around" }}>
                        <Link to={`/decks/${id}`}>
                            <ViewButton />

                        </Link>
                        <Link to={`/decks/${id}/study`}>
                            <StudyButton />

                        </Link>
                        <DeleteButton id={id} handleDeleteDeck={handleDeleteDeck} />
                    </div>
                </div>
            </div >
        )
    })

    return (

        <div>
            {availableDecks.length === 0 ? <Loader /> : decks}
        </div>
    )



}


export default Decks