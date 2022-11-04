import React from "react";


// this will be imported to AddCard component
const AddCardForm = ({ handleChange, handleDone, handleSubmit, formDataCards }) => {

    return (<form onSubmit={handleSubmit}>
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

    </form>)
}


export default AddCardForm