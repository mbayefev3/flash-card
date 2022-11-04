import React from 'react'
import { Link } from 'react-router-dom'
import { HomeButton } from '../homepagecomponent/DecksButton'
const AddCardTitle = ({ deckName, profile }) => {

    return (
        <div>
            <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>



                <Link to="/">
                    <HomeButton />
                </Link>
                <p style={{ color: 'blue' }}>{deckName}</p>
                <p> {profile}</p>


            </div>
            <div style={{ marginTop: '0.5rem' }}>
                <h3>{deckName}: {profile}</h3>
            </div>
        </div>
    )
}

export default AddCardTitle