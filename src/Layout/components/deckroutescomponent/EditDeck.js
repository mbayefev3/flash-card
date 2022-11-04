import React from "react"

import { useState, useEffect } from 'react'
import { createDeck, readDeck, updateDeck } from '../../../utils/api'
import { useHistory, Link, useParams, useRouteMatch } from 'react-router-dom'
import { HomeButton } from "../homepagecomponent/DecksButton"
import Loader from "../homepagecomponent/Loader"

const EditDeck = () => {

    const { deckId } = useParams()
    const { url } = useRouteMatch()

    const history = useHistory()
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        id: ''
    })
    const [title, setTitle] = useState('')

    const { name, description } = formData



    useEffect(() => {

        const loadDeck = async () => {

            const deck = await readDeck(deckId)
            setFormData({
                ...formData, ...deck
            })

        }
        loadDeck()
    }, [deckId])



    // for to get the name of the deck
    useEffect(() => {

        const loadDeck = async () => {

            const { name } = await readDeck(deckId)
            setTitle(name)
        }
        loadDeck()
    }, [])



    const handleChangeInput = ({ target: { name, value } }) => {
        setFormData({
            ...formData,
            [name]: value,
            id: deckId
        })
    }




    const handleFormSubmit = async (e) => {
        e.preventDefault()

        if (name && description) {

            const { id } = await updateDeck(formData)
            history.push(`/decks/${id}`)
        }
    }

    const handleButtonCancel = () => {

        history.push(`/decks/${deckId}`)

    }

    const checkForDeck = Object.values(formData).every(val => val === '')
    return (
        <div>

            {!checkForDeck && title ? <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/">
                        <HomeButton />
                    </Link>
                    <Link to={url}>
                        <p>{title}</p>

                    </Link>
                    <p>Edit Deck</p>

                </div>

                <h4>Edit Deck</h4>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Deck Name" value={name} onChange={handleChangeInput} name="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Brief description of the deck"
                            value={description} onChange={handleChangeInput} name="description" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={handleButtonCancel}>Cancel</button>


                </form>
            </div> : <Loader />}
        </div>
    )
}


export default EditDeck