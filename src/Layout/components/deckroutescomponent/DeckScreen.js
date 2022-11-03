
import React, { useState, useEffect } from 'react'
import { readDeck } from '../../../utils/api'
import { useRouteMatch, useParams, Link } from 'react-router-dom'
const DeckSreen = () => {

    const [Deck, setDeck] = useState({})
    const { deckId } = useParams()

    useEffect(() => {

        const loadDeck = async () => {

            const DeckData = await readDeck(deckId)
            setDeck({
                ...DeckData
            })
        }

        loadDeck()
    }, [deckId])


    if (Object.keys(Deck).length > 0) {
        const { name, description } = Deck
        return (
            <div className="card">
                <div className="card-header">
                    <Link to="/">Home</Link>
                    <p>{name}</p>
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )

    } else {
        return <h1>....loading</h1>
    }


}


export default DeckSreen