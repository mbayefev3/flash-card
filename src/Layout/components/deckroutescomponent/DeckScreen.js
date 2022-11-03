
import React, { useState, useEffect } from 'react'
import { readDeck, deleteCard } from '../../../utils/api'
import { useRouteMatch, useParams, Link } from 'react-router-dom'
import DeckScreenCards from './DeckScreenCards'
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


    //ths func will delete the card
    const handleDeleteCard = async (id) => {
        if (window.confirm("Delete this card?\n\nYou will not be able to recover it.")) {

            await deleteCard(id)
            const unRemovedCard = await readDeck(deckId)
            setDeck({
                ...Deck,
                ...unRemovedCard
            })
        }

    }
    if (Object.keys(Deck).length > 0) {

        const { name, description, cards } = Deck

        //this will give me the right card format 
        const validCardsToStudy = cards.filter(card => {
            return Object.keys(card).length === 4 && card.front && card.back && (card.deckId || card.deckId === 0) && (card.id || card.id === 0)

        })

        // /decks/:deckId/cards/new
        // /decks/:deckId/edit
        return (
            <div className="card">
                <div className="card-header">
                    <Link to="/">Home</Link>
                    <p>{name}</p>
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <Link to={`/decks/${deckId}/edit`}>
                        <button className="btn btn-primary">Edit</button>

                    </Link>
                    <a href="#" className="btn btn-primary">Study</a>
                    <Link to={`/decks/${deckId}/cards/new`} >
                        <button>
                            Add cards
                        </button>
                    </Link>
                    <a href="#" className="btn btn-primary">Delete</a>

                </div>

                <div>
                    {validCardsToStudy.length === 0 ? <h2>No Cards at the moment</h2> : <DeckScreenCards validCardsToStudy={validCardsToStudy}
                        handleDeleteCard={handleDeleteCard} />}
                </div>
            </div>
        )

    } else {
        return <h1>....loading</h1>
    }


}


export default DeckSreen