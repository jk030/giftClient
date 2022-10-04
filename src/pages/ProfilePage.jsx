import React, {useContext} from "react";
import {useParams, useNavigate} from "react-router-dom"
import axios from "axios";
import { AuthContext } from "../context/auth.context";
// import { Button } from "react-router-dom";
import {Button } from "react-bootstrap"
import { Link } from "react-router-dom";


import { useState, useEffect } from "react";

function ProfilePage(props) {
  const {userId} = useParams();
  const [userProfile, setUserProfile] = useState({})
  console.log(userProfile)
  
  const { authenticateUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const getUserInfo = () => {
      axios
      .get(`${process.env.REACT_APP_API_URL}/profilePage/${userId}`)
      .then((response) => {
        const userDetails = response.data;
        console.log(userDetails)
        setUserProfile(userDetails)
        })
      .catch((error) => console.log(error));
  };
  // console.log(getUserInfo)

  useEffect(() => {
    getUserInfo();
  }, [] );


  const deleteRecipient = () => {                  
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/recipients/${userProfile.recipient[0]._id}`)
      .then(() => {
        getUserInfo();
        navigate(`/profilePage/${userId}`);
      })
      .catch((err) => console.log(err));

  };  


    return (
      <div className="Profile">

        <div className="ContainerProfileInfo"> 
                <img className="imageGiftHomePage" src="/Img/image 22.png" alt="gift" width={270} />
                <img className="rectangle" src="/Img/Rectangle 19.png" alt="gift" width={400} />  
                <div className="headlinePofile"> Welcome back  <br /> {userProfile.userName}! </div>
            
        </div>

        <div className="ContainerGiftList" > 
            <h1> List: </h1>
            { Object.keys(userProfile).length !== 0 && userProfile.recipient.map(recipient => {
              return ( 
                <div> 
              <h4>{recipient.name}</h4>
              <img src={recipient.imageRecipient} width={200}/>
              <Link to={`/listPage/${recipient._id}`}> <button className="signUpbtn">See Gift List</button> </Link>
              <button className="signUpbtn" onClick={deleteRecipient}>Delete Recipient</button>
        </div> 
          )
        })
        }

        <h2> New Event? Create a new List! </h2>
        <Button href="/addNewList" type="button" className="btn btn-outline-light">Add New List</Button>
        </div>

        
      </div>
    );
  
}
  
  export default ProfilePage;


  // 1. axios -> liste von Recipiernt 
  // 2. map 
  // 3. pro Recipient eine Card 