import React from "react"

import { useState, useEffect } from 'react'
import { createDeck } from '../../../utils/api'
import { useHistory, Link, useParams } from 'react-router-dom'
const CreateDeck = () => {

    const { deckId } = useParams()
    const history = useHistory()
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    })

    const { name, description } = formData




    const handleChangeInput = ({ target: { name, value } }) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }




    const handleFormSubmit = async (e) => {
        e.preventDefault()

        if (name && description) {

            const { id } = await createDeck(formData)
            history.push(`/decks/${id}`)
        }
    }

    const handleButtonCancel = () => {

        history.push('/')

    }
    return (
        <>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <p>Create Deck</p>
            </div>
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
        </>
    )
}


export default CreateDeck