import { useState } from "react";
// import axios from "axios";
import service from "../service.js";

function AddGift(props) {
    const [ title, setTitle ] = useState("");
    const [ priceSpan, setPriceSpan ] = useState(0);
    const [ occasion, setOccasion ] = useState("");
    const [ imageGift, setImageGift ] = useState("");
    const [ link, setLink ] = useState("");
    const [ notes, setNotes ] = useState("")

    const handleFileUpload = (e) => {
        console.log("The file to be uploaded is: ", e.target.files[0]);
     
        const uploadData = new FormData();
        
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new gift in '/api/gifts' POST route
        uploadData.append("imageGift", e.target.files[0]);
        
        service
          .uploadGiftImage(uploadData)
          .then(response => {
            console.log("response is: ", response);
            // response carries "fileUrl" which we can use to update the state
            setImageGift(response.fileUrl);
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        // we need the recipient id when creating the new gift
        const { recipientId,  getRecipientInfo } = props;
        // create an object representing  the body of the POST request
        const requestBody = { title, priceSpan, occasion, link, notes, recipientId: recipientId, imageGift };
        console.log(requestBody);
        // const storedToken = localStorage.getItem("authToken");
        service
            .createGift(requestBody)
            .then((response) => {
                // reset the states to clear inputs
                getRecipientInfo()
                setTitle("");
                setPriceSpan(0);
                setOccasion("");
                setLink("");
                setNotes("");
                setImageGift("") 
                
                // props.refreshRecipients();
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className="AddGift">
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
                    onChange={(e) => setPriceSpan(e.target.value)}
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

                <label className="Details2" >Upload image: </label>
                <input
                    type="file"
                    name="imageGift"                    
                    onChange={(e) => handleFileUpload(e)}
                />

                <button className="signUpbtn" type="submit">Add Gift</button>
            </form>
        </div>
    )
}

export default AddGift;