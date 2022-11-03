import React, { useState } from "react";
import FlipButton from "./FlipButton";
import { useHistory } from 'react-router-dom'

const Lessons = ({ cards }) => {
    const [flip, setflip] = useState('front')
    const [next, setNext] = useState(0)
    const history = useHistory()
    // in the data there are cards that should not be included, this allow us to get the valid card format
    const validCardsToStudy = cards.filter(card => {
        return Object.keys(card).length === 4 && card.front && card.back && (card.deckId || card.deckId === 0) && (card.id || card.id === 0)

    })

    const handleFilpCard = () => {

        if (flip === 'front') {
            setflip('back')
        } else {
            setflip('front')
        }
    }

    const handleNextClick = () => {
        if (next < validCardsToStudy.length - 1) {
            setNext(next + 1)
        }

        else {
            if (window.confirm("Restart cards?\n\n click cancel to return to home page.")) {
                setflip('front')
                setNext(0)
            } else {
                history.push('/')
            }
        }
    }

    return (
        <div className="card">

            <div className="card-body">
                {validCardsToStudy.length >= 3 ? null : <h2>Not enough cards</h2>}
                <h3>{`Card ${validCardsToStudy.length > 0 ? next + 1 : 0} of ${validCardsToStudy.length}`}</h3>

                {validCardsToStudy.length >= 3 ? <p className="card-text">{cards[next][flip]}</p> : null
                }

                {validCardsToStudy.length >= 3 ? <FlipButton handleFilpCard={handleFilpCard} handleNextClick={handleNextClick} next={next} flip={flip} /> : <>
                    {<p>{`You need at least 3 cards to study.There are ${validCardsToStudy.length} cards in the deck`}</p>
                    }
                    <button type="button" className="btn btn-info">Add Cards</button>

                </>
                }
            </div>
        </div>
    )
}


export default Lessons