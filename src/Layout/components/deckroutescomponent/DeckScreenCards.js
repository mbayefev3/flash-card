import React from "react";
import { deleteCard } from '../../../utils/api'

import { Link, useParams } from "react-router-dom";

import { EditButton, DeleteCardButton } from "../homepagecomponent/DecksButton";
const DeckScreenCards = ({ validCardsToStudy, handleDeleteCard }) => {

    // /decks/:deckId/cards/:cardId/edit

    const { deckId } = useParams()
    const cards = validCardsToStudy.map(({ front, back, id }) => {


        return (

            <div key={id}>
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">{front}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">{back}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to={`/decks/${deckId}/cards/${id}/edit`}>
                        <EditButton />
                    </Link>
                    < DeleteCardButton handleDeleteCard={handleDeleteCard} id={id} />
                </div>

            </div>

        )
    })


    return <div>
        {cards}
    </div>

}




export default DeckScreenCards