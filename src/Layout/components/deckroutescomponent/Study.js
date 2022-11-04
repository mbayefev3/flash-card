import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { readDeck } from '../../../utils/api'
import StudyLessons from "./StudyLessons"
import Loader from "../homepagecomponent/Loader"
const Study = () => {

    const [Deck, setDeck] = useState({})
    const { deckId } = useParams()

    // fetch a single deck to study
    useEffect(() => {

        const loadDeck = async () => {

            const deck = await readDeck(deckId)
            setDeck({ ...deck })
        }
        loadDeck()

    }, [deckId])
    // console.log('deckId', deckId)
    return (
        <div>
            {Object.keys(Deck).length === 0 ? <Loader /> : <StudyLessons Deck={Deck} />}
        </div>
    )
}


export default Study