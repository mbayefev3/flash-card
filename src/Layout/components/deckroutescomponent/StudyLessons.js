import React from "react";
import { Link, useRouteMatch } from 'react-router-dom'
import Lessons from './Lessons'
const StudyLessons = ({ Deck }) => {
    const { url } = useRouteMatch()
    console.log('fff', Deck)
    return (
        <div className="card">
            <div className="card-header">
                <Link to="/">Home</Link>
                <Link to={url}>{Deck.name}</Link>
                <span>Study</span>
            </div>
            <div className="card-body">
                <h5 className="card-title">Study: {Deck.name}</h5>
                <Lessons cards={Deck.cards} />
            </div>
        </div>
    )
}


export default StudyLessons