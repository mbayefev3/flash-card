
import React, { useState, useEffect } from 'react'
import { readDeck, deleteCard, deleteDeck } from '../../../utils/api'
import { useRouteMatch, useParams, Link, history, useHistory } from 'react-router-dom'
import DeckScreenCards from './DeckScreenCards'
import DeckScreenTitleAndButtons from './DeckScreenTileAndButtons'
const DeckSreen = () => {

    const history = useHistory()
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

    const handleDeleteDeck = async (deckId) => {
        if (window.confirm("Delete this deck?\n\nYou will not be able to recover it.")) {
            await deleteDeck(deckId)
            history.push('/')

        }
    }
    if (Object.keys(Deck).length > 0) {

        const { name, description, cards } = Deck

        //this will give me the right card format 

        // /decks/:deckId/cards/new
        // /decks/:deckId/edit
        return (
            <div className="card">
                <DeckScreenTitleAndButtons name={name} description={description} deckId={deckId} handleDeleteDeck={handleDeleteDeck} />

                <div>
                    {cards.length === 0 ? <h2>No Cards at the moment</h2> : <DeckScreenCards validCardsToStudy={cards}
                        handleDeleteCard={handleDeleteCard} />}
                </div>
            </div>
        )

    } else {
        return <h1>....loading</h1>
    }


}


export default DeckSreen