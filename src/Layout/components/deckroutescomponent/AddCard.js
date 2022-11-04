import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch, Link } from 'react-router-dom'
import { readDeck, createCard, readCard, updateCard } from '../../../utils/api'
import AddCardTitle from './AddCardTitle'
import { HomeButton } from '../homepagecomponent/DecksButton'
import Loader from '../homepagecomponent/Loader'
import AddCardForm from './AddCardForm'
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
            // we only need the load card when we edit since edit card and add card share the same form component
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
                    if (formDataCards.front.trim() && formDataCards.back.trim()) {
                        await createCard(deckId, formDataCards)
                        setFormDataCards({ front: '', back: '' })

                        history.push(`${url}`)
                    }
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
                if (formDataCards.front.trim() && formDataCards.back.trim()) {
                    await createCard(deckId, formDataCards)
                    setFormDataCards({ front: '', back: '' })

                    history.push(`/decks/${deckId}`)
                }
            } else {
                history.push(`/decks/${deckId}`)
            }

        } else {

            if (formDataCards.front && formDataCards.back) {
                if (formDataCards.front.trim() && formDataCards.back.trim()) {

                    await updateCard({
                        ...formDataCards,
                        id: cardId
                    })
                    history.push(`/decks/${deckId}`)
                }
            }



        }
    }


    const checkToRender = Object.values(formDataCards).every(val => val === '')

    return (
        <div>
            {
                ((!checkToRender && deckName) || (!edit && deckName)) ? <div>



                    <AddCardTitle deckName={deckName} profile={profile} />
                    < AddCardForm handleChange={handleChange} handleDone={handleDone} handleSubmit={handleSubmit} formDataCards={formDataCards} />

                </div> : <Loader />
            }

        </div>
    )
}





export default AddCard