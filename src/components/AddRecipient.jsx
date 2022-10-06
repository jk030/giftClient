import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
// import axios from "axios";
import service from "../service.js";


function AddRecipient(props) {
  const [ name, setName ] = useState("");
  const [ personalDetails, setPersonalDetails ] = useState("");
  const [ preferences, setPreferences ] = useState("");
  const [ unwanted, setUnwanted ] = useState("");
  const [ imageRecipient, setImageRecipient ] = useState("");

  const { user } = useContext(AuthContext)
  // console.log("this is tthe user",user)
  const {getUserInfo} = props

  const handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
 
    const uploadData = new FormData();
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageRecipient", e.target.files[0]);
  
    service
      .uploadImage(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageRecipient(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { name, personalDetails, preferences, unwanted, userId: user._id, userName: user.userName, imageRecipient }
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
        // props.refreshRecipients();
      })
      .catch((error) => console.log(error))
  }
//console.log("these are the props",props)
  
  return (
    <div className="AddRecipient">
      <form onSubmit={handleSubmit}>
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

        <label className="Details2" >Preferences:</label>
        <input
          type="text"
          name="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />

        <label className="Details2" >Things they dont want:</label>
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


        <button className="signUpbtn" type="submit">Save</button>
        
      </form>
    </div>
  );
}

export default AddRecipient;