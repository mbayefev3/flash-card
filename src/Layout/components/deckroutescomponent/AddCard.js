import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Link } from 'react-router-dom'
import { readDeck, createCard, readCard, updateCard } from '../../../utils/api'
import AddCardTitle from './AddCardTitle'
import { HomeButton } from '../homepagecomponent/DecksButton'
import Loader from '../homepagecomponent/Loader'
const AddCard = ({ profile, edit }) => {

    // console.log('props', profile)

    const { deckId, cardId } = useParams()
    const history = useHistory()
    const { path, url } = useRouteMatch()
    const [formDataCards, setFormDataCards] = useState({ front: '', back: '' })
    const [deckName, setDeckName] = useState('')

    // to get the card data
    useEffect(() => {

        const loadCard = async () => {
            const card = await readCard(cardId)
            setFormDataCards({
                ...card
            })
        }

        if (edit) {
            // we only need the load card when we edit
            loadCard()

        }

    }, [cardId])


    // to get the deck data

    useEffect(() => {

        const loadDeck = async () => {

            const { name } = await readDeck(deckId)
            setDeckName(name)
        }

        loadDeck()
    }, [deckId])



    const handleChange = ({ target: { name, value } }) => {

        setFormDataCards({
            ...formDataCards,
            [name]: value
        })


    }


    const handleSubmit = async (e) => {

        e.preventDefault()
        const { front, back } = formDataCards

        if (front && back) {

            if (!edit) {
                if (formDataCards.front && formDataCards.back) {
                    await createCard(deckId, formDataCards)
                    setFormDataCards({ front: '', back: '' })

                    history.push(`${url}`)
                }
            } else {
                await updateCard({
                    ...formDataCards,
                    id: cardId
                })
                history.push(`/decks/${deckId}`)
            }
        }

    }

    const handleDone = async () => {

        if (!edit) {

            if (formDataCards.front && formDataCards.back) {
                await createCard(deckId, formDataCards)
                setFormDataCards({ front: '', back: '' })

                history.push(`/decks/${deckId}`)
            } else {
                history.push(`/decks/${deckId}`)
            }

        } else {
            await updateCard({
                ...formDataCards,
                id: cardId
            })
            history.push(`/decks/${deckId}`)
        }
    }


    const checkToRender = Object.values(formDataCards).every(val => val === '')
    console.log(checkToRender, deckName)

    return (
        <div>
            {
                ((!checkToRender && deckName) || (!edit && deckName)) ? <div>



                    <AddCardTitle deckName={deckName} profile={profile} />
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Front</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Front side of the card'
                                name="front"
                                value={formDataCards.front}
                                onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Back</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Back side of the card' value={formDataCards.back}
                                name="back"
                                onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button style={{ marginLeft: '1rem' }} type="button" className="btn btn-primary" onClick={handleDone}>Done</button>

                    </form>
                </div> : <Loader />
            }

        </div>
    )
}





export default AddCard