import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { readDeck } from '../../../utils/api'
import StudyLessons from "./StudyLessons"
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
        <>
            {Object.keys(Deck).length === 0 ? <h1>...Loading</h1> : <StudyLessons Deck={Deck} />}
        </>
    )
}


export default Study