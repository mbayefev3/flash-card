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

                <button className="btn btn-secondary" style={{ marginBottom: "15px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg> Create Deck
                </button>
            </Link>
            <Decks availableDecks={availableDecks} handleDeleteDeck={handleDeleteDeck} />
        </div>
    )
}

export default HomePage