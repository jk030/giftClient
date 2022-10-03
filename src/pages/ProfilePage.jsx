import React from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
// import { Button } from "react-router-dom";
import {Button } from "react-bootstrap"
import { Link } from "react-router-dom";


import { useState, useEffect } from "react";

function ProfilePage(props) {

  const {userId} = useParams();

  const [userProfile, setUserProfile] = useState({})
  console.log(userProfile)
  
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


    return (
      <div className="Profile">
        
        {/* <RecipientList refreshList={getProfileDetails} /> */}
        
    {/* not sure what we iterate over */}

        <div className="Box1ProfileInfo"> 
        <h1 className="layer1"> Welcome back {userProfile.userName}! </h1> 
            <div className="parent">
              <img className="image1" src="/Img/image 22.png" alt="gift" width={300} />
              <img className="image2" src="/Img/Rectangle 19.png" alt="gift" width={400} />
            </div>   
        </div>
        <div className="Box2GiftList" > 
        <h1> List: </h1>
        { Object.keys(userProfile).length !== 0 && userProfile.recipient.map(recipient => {
          return ( 
            <div> 
          <h4>{recipient.name}</h4>
          <img src={recipient.imageRecipient} width={200}/>
          <Link to={`/listPage/${recipient._id}`}> <button className="signUpbtn">See Gift List</button> </Link>
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