import React, { useState } from "react";
import FlipButton from "./FlipButton";
import { useHistory } from 'react-router-dom'
import ByFlip from "./ByFlip"
const Lessons = ({ cards, Deck }) => {
    const [flip, setflip] = useState('front')
    const [next, setNext] = useState(0)
    const history = useHistory()
    // in the data there are cards that should not be included, this allow us to get the valid card format



    // cards.filter(card => {

    //     return Object.keys(card).length === 4 && card.front && card.back && (card.deckId || card.deckId === 0) && (card.id || card.id === 0)

    // })
    // console.log('valid', validCardsToStudy)
    const handleFilpCard = () => {

        if (flip === 'front') {
            setflip('back')
        } else {
            setflip('front')
        }
    }

    const handleNextClick = () => {
        if (next < cards.length - 1) {
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
        <ByFlip handleFilpCard={handleFilpCard} handleNextClick={handleNextClick} next={next} flip={flip} cards={cards} />
    )
}


export default Lessons