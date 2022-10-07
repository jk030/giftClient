import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from "axios";

function EditRecipientPage(props) {
    const [ name, setName ] = useState("");
    const [ personalDetails, setPersonalDetails ] = useState("");
    const [ preference, setPreference ] = useState("");
    const [ unwanted, setUnwanted ] = useState("");

    const { recipientId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
        // TODO: will need to check the get route i.e. listPage OR recipientPage 
            .get(`${process.env.REACT_APP_API_URL}/api/recipients/${recipientId}`)
            .then((response) => {
                const oneRecipient = response.data;
                setName(oneRecipient.name);
                setPersonalDetails(oneRecipient.personalDetails);
                setPreference(oneRecipient.preference);
                setUnwanted(oneRecipient.unwanted);
            })
            .catch((error) => console.log(error));
    }, [recipientId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { name, personalDetails, preference, unwanted };
        
        axios
        // TODO: will need to check the get route i.e. listPage OR recipientPage 
            .put(`${process.env.REACT_APP_API_URL}/api/recipients/${recipientId}`, requestBody)
            .then((response) => {
                navigate(`/recipients/${recipientId}`)
            });
    };

    const deleteRecipient = () => {
        axios
        // TODO: will need to check the get route i.e. listPage OR recipientPage 
            .delete(`${process.env.REACT_APP_API_URL}/api/recipients/${recipientId}`)
            .then(() => {
                navigate("/recipients")
            })
            .catch((err) => console.log(err))
    };

    return (
        <div>
            <h3>Edit the Recipient</h3>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <label>Personal Details:</label>
                <textarea
                type="text"
                name="personalDetails"
                value={personalDetails}
                onChange={(e) => setPersonalDetails(e.target.value)}
                />

                <label>Preference:</label>
                <textarea
                type="text"
                name="preference"
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
                />

                <label>Add Past Gifts:</label>
                <textarea
                type="text"
                name="unwanted"
                value={unwanted}
                onChange={(e) => setUnwanted(e.target.value)}
                />

                <Link to="/profilePage">
                    <button>Go Back</button>    
                </Link>
                <button type="submit">Update Recipient</button>
                <button onClick={deleteRecipient}>Delete Recipient</button>
            </form>
        </div>
    )
}

export default EditRecipientPage;