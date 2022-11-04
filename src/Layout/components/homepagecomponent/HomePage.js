import React, { useEffect, useState } from 'react'
import { listDecks, deleteDeck } from "../../../utils/api";
import Decks from './Decks';
import { Link } from 'react-router-dom'
import { CreateDeckButton } from './DecksButton';
const HomePage = () => {

    const [availableDecks, setAvailableDecks] = useState([])


    // this will get the list of all decks using the api listDecks func
    useEffect(() => {

        const loadDecks = async () => {
            const decks = await listDecks()
            setAvailableDecks([...decks])
        }
        loadDecks()
    }, [])


    // this is for deleting the clicked deck 

    const handleDeleteDeck = async (deckId) => {

        if (window.confirm("Delete this deck?\n\n You will not be able to recover it.")) {

            await deleteDeck(deckId) //this will return {}
            const undeletedDecks = await listDecks()
            setAvailableDecks([...undeletedDecks])


        }

    }

    return (
        <div>
            <Link to="/decks/new">
                < CreateDeckButton />
            </Link>
            <Decks availableDecks={availableDecks} handleDeleteDeck={handleDeleteDeck} />
        </div>
    )
}

export default HomePage