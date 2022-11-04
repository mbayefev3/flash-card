import React from "react";
import { Link, useRouteMatch } from 'react-router-dom'
import Lessons from './Lessons'
import { HomeButton } from "../homepagecomponent/DecksButton";
const StudyLessons = ({ Deck }) => {
    const { url } = useRouteMatch()
    return (
        <div className="card">
            <div className="card-header">
                <Link to="/">
                    <HomeButton />
                </Link>
                <Link to={url}>
                    <span style={{ color: "blue" }}> {Deck.name}</span>

                </Link>
                <span>Study</span>
            </div>
            <div className="card-body">
                <h5 className="card-title">Study: {Deck.name}</h5>
                <Lessons cards={Deck.cards} Deck={Deck} />
            </div>
        </div>
    )
}


export default StudyLessons