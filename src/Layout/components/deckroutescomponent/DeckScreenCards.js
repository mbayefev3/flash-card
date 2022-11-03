import React from "react";
import { deleteCard } from '../../../utils/api'

const DeckScreenCards = ({ validCardsToStudy, handleDeleteCard }) => {




    const cards = validCardsToStudy.map(({ front, back, id }) => {


        return (


            <div className="row" key={id}>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{front}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{back}</p>
                        </div>
                    </div>
                </div>
                <div style={{ TextAlign: "center" }}>
                    <button>Edit</button>
                    <button onClick={() => handleDeleteCard(id)}>Delete</button>
                </div>
            </div>


        )
    })


    return <>
        {cards}
    </>

}




export default DeckScreenCards