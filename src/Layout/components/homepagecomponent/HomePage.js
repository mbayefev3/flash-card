import React, { useEffect, useState } from 'react'
import { listDecks, deleteDeck } from "../../../utils/api";
import Decks from './Decks';
import { Link } from 'react-router-dom'
const HomePage = () => {

    const [availableDecks, setAvailableDecks] = useState([])


    // this will get the list of all decks using the api listDecks func
    useEffect(() => {

        const loadDecks = async () => {
            const data = await listDecks()
            setAvailableDecks([...data])
        }
        loadDecks()
    }, [])

    // this is for deleting the clicked deck 

    const handleDeleteDeck = async (id) => {

        if (window.confirm("Delete this deck?\n\n You will not be able to recover it.")) {

            await deleteDeck(id)
            const undeletedDecks = await listDecks()
            setAvailableDecks([...undeletedDecks])


        }

    }

    return (
        <div>
            <Link to="/decks/new">
                <button>Create Deck</button>
            </Link>
            <Decks availableDecks={availableDecks} handleDeleteDeck={handleDeleteDeck} />
        </div>
    )
}

export default HomePage