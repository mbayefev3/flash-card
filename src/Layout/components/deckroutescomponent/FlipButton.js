import React from "react";

const FlipButton = ({ handleFilpCard, handleNextClick, next, flip }) => {

    return (
        <div>
            <button className="btn btn-primary" onClick={handleFilpCard}>Flip</button>
            {flip === 'front' && next === 0 ? '' : <button style={{ marginLeft: "10px" }}
                onClick={handleNextClick}
                className="btn btn-primary">Next</button>}
        </div>
    )
}


export default FlipButton