import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
// import axios from "axios";
import service from "../service.js";
import "../styling/AddRecipient.css";

function AddRecipient(props) {
  const [ name, setName ] = useState("");
  const [ personalDetails, setPersonalDetails ] = useState("");
  const [ preferences, setPreferences ] = useState("");
  const [ unwanted, setUnwanted ] = useState("");
  const [ imageRecipient, setImageRecipient ] = useState("");
  const [privacy, setPrivacy] = useState(true)

  const { user } = useContext(AuthContext)
  const {getUserInfo} = props


  const handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
 
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new recipient in '/api/recipients' POST route
    uploadData.append("imageRecipient", e.target.files[0]);
  
    service
      .uploadRecipientImage(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageRecipient(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, personalDetails, preferences, unwanted, userId: user._id, userName: user.userName, imageRecipient, privacy }
    // const storedToken = localStorage.getItem("authToken");

    service
      .createRecipient(requestBody)
      .then((response) => {
        getUserInfo()
        setName("")
        setPersonalDetails("")
        setPreferences("")
        setUnwanted("")
        setImageRecipient("")
        setPrivacy(true)

        // props.refreshRecipients();
      })
      .catch((error) => console.log(error))
  }
//console.log("these are the props",props)
  
  return (
    <div className="AddRecipient">

     
      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h3>Add Recipient</h3>
        <label className="Details2" >Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="Details2" >Personal Details:</label>
        <input
          type="text"
          name="personalDetails"
          value={personalDetails}
          onChange={(e) => setPersonalDetails(e.target.value)}
        />

        <label className="Details2" >Likes:</label>
        <input
          type="text"
          name="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />

        <label className="Details2" >Dislikes:</label>
        <input
          type="text"
          name="unwanted"
          value={unwanted}
          onChange={(e) => setUnwanted(e.target.value)}
        />

        <label className="Details2" >Upload image: </label>
        <input 
          type="file"
          name="imageRecipient"
          onChange={(e) => handleFileUpload(e)}
        />

    
        {privacy ?<button  className="setListtoPrivatBtn" type="button" onClick={()=> setPrivacy(false)}>Set list to private</button> : <button className="signUpbtn" type="button" onClick={()=> setPrivacy(true)}>Set list to public</button> }
        {privacy ?<p>! List is public now ! </p> : <p>List is private now</p>}


        <button className="setListtoPrivatBtn" type="submit">Save</button>
        
      </form>
    </div>
  );
}

export default AddRecipient;