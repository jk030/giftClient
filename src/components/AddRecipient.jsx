import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddRecipient(props) {
  const [ name, setName ] = useState("");
  const [ personalDetails, setPersonalDetails ] = useState("");
  const [ preferences, setPreferences ] = useState("");
  const [ unwanted, setUnwanted ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, personalDetails, preferences, unwanted }

    axios
      .post(`${API_URL}/api/recipients`, requestBody)
      .then((response) => {
        setName("")
        setPersonalDetails("")
        setPreferences("")
        setUnwanted("")
        // props.refreshRecipients();
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="AddRecipient">
      <h3>Add Recipient</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
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

        <label>Preferences:</label>
        <textarea
          type="text"
          name="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddRecipient;