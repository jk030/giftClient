import React from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
//import { Button } from "react-router-dom";
import {Button} from "react-bootstrap"

import { useState, useEffect } from "react";

// import { useContext } from "react";

// import {AuthContext} from '../context/auth.context';


function ProfilePage(props) {
  // const { user } = useContext(AuthContext);
  const {userId} = useParams();
  const [userProfile, setUserProfile] = useState({})

  const getUserInfo = () => {
      axios
      .get(`${process.env.REACT_APP_API_URL}/profilePage/${userId}`)
      .then((response) => {
        const userDetails = response.data;
        console.log(userDetails)
        // this console.log not works  
        setUserProfile(userDetails)
        })
      .catch((error) => console.log(error));
  };
  // console.log(getUserInfo)

  useEffect(() => {
    getUserInfo();
  }, [] );


    return (
      <div className="Profile">
        <div className="Box1ProfileInfo"> 
        {/* <h1 className="layer1"> Welcome back {user._id}! </h1>  */}
            <div className="parent">
              <img className="image1" src="/Img/image 22.png" alt="gift" width={300} />
              <img className="image2" src="/Img/Rectangle 19.png" alt="gift" width={400} />
            </div>   
        </div>
        <div className="Box2GiftList" > 
        <h1> List: </h1>
        { Object.keys(userProfile).length !== 0 && userProfile.recipients.map(recipient => {
          return ( 
          <h4>{recipient.name}</h4>
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