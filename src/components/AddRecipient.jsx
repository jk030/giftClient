import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom"

import axios from "axios";


function AddRecipient(props) {
 
  const [ name, setName ] = useState("");
  const [ personalDetails, setPersonalDetails ] = useState("");
  const [ preferences, setPreferences ] = useState("");
  const [ unwanted, setUnwanted ] = useState("");

  const { user } = useContext(AuthContext)

  const { getUserInfo } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, personalDetails, preferences, unwanted, userId: user._id }
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/recipients`, requestBody, {headers: {Authorization: `Bearer ${storedToken}`}})
      .then(async (response) => {

        await getUserInfo();
        setName("")
        setPersonalDetails("")
        setPreferences("")
        setUnwanted("")
      })

      .catch((error) => console.log(error))
  }
  
//console.log("these are the props",props)
  
  return (
    <div className="AddRecipient">
      <h3>Add Recipient</h3>
      
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

        <label>Preferences:</label>
        <textarea
          type="text"
          name="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />

        <label>Things they dont want:</label>
        <textarea
          type="text"
          name="unwanted"
          value={unwanted}
          onChange={(e) => setUnwanted(e.target.value)}
        />

        <button type="submit">Add</button>
        
      </form>
    </div>
  );
}

export default AddRecipient;