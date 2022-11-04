import React from 'react'

import FlipButton from './FlipButton'
import { AddCardsButton } from '../homepagecomponent/DecksButton'
import { Link, useParams } from 'react-router-dom'

const ByFlip = ({ handleFilpCard, handleNextClick, next, flip, cards }) => {
    // /decks/:deckId/cards/new
    // const { url } = useRouteMatch()
    const { deckId } = useParams()
    // console.log(deckId)
    return (
        <div className="card">

            <div className="card-body">
                {cards.length >= 3 ? null : <h5>Not enough cards</h5>}
                <h4>{`Card ${cards.length > 0 ? next + 1 : 0} of ${cards.length}`}</h4>

                {cards.length >= 3 ? <p className="card-text">{cards[next][flip]}</p> : null
                }

                {cards.length >= 3 ? <FlipButton handleFilpCard={handleFilpCard} handleNextClick={handleNextClick} next={next} flip={flip} /> : <div>
                    {<p>{`You need at least 3 cards to study.There are ${cards.length} cards in the deck`}</p>
                    }
                    <Link to={`/decks/${deckId}/cards/new`}>

                        <AddCardsButton />
                    </Link>
                </div>
                }
            </div>
        </div>
    )
}



export default ByFlip