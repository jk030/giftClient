import { useState } from "react";
import axios from "axios";

function AddGift(props) {
    const [ title, setTitle ] = useState("");
    const [ priceSpan, setPriceSpan ] = useState(0);
    const [ occasion, setOccasion ] = useState("");
    // const [ imageGift, setImageGift ] = useState("");
    const [ link, setLink ] = useState("");
    const [ notes, setNotes ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // we need the recipient id when creating the new gift
        const { recipientId,  getRecipientInfo } = props;
        // create an object representing  the body of the POST request
        const requestBody = { title, priceSpan, occasion, link, notes, recipientId: recipientId };

        const storedToken = localStorage.getItem("authToken");
        axios
            .post(`${process.env.REACT_APP_API_URL}/api/gifts`, requestBody, {headers: {Authorization: `Bearer ${storedToken}`}})
            .then((response) => {
                // reset the states to clear inputs
                getRecipientInfo()
                setTitle("");
                setPriceSpan(0);
                setOccasion("");
                setLink("");
                setNotes(""); 
                
                // props.refreshRecipients();
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <h3>Add New Gift</h3>
            <form onSubmit={handleSubmit}>
                <label className="Details2" >Title: </label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label className="Details2"  >Price Span: </label>
                <input
                    type="number"
                    name="priceSpan"
                    value={priceSpan}
                    onChange={(e) => setPriceSpan(Number(e.target.value))}
                />

                <label className="Details2" >Occasion: </label>
                <input
                    type="text"
                    name="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                />

                <label className="Details2" >Link: </label>
                <input
                    type="text"
                    name="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />

                <label className="Details2" >Notes: </label>
                <input
                    type="text"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />

                <button className="signUpbtn" type="submit">Add Gift</button>
            </form>
        </div>
    )
}

export default AddGift;