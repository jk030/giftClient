import RecipientCard from "../components/RecipientCard"
// import {AuthContext} from ...
import React from "react";
import axios from "axios";
import { Button } from "react-router-dom";

import { useState, useEffect } from "react";
import RecipientCard from "../components/RecipientCard";

function ProfilePage(props) {
  const [recipientInfo, setRecipientInfo] = useState([]); 
  
  const getRecipientInfo = () => {
    //   const storedToken = localStorage.getItem("authToken");
        axios
        .get(`${process.env.REACT_APP_API_URL}/profile`)// { headers: { Authorization: `Bearer ${storedToken}` } })
        .then((response) => setRecipientInfo(response.data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
      getRecipientInfo();
    }, [] );
  
  
    return (
      <div className="Profile">
      <div className="ProfileInfo"> 
           {/* {user} --> wait for Auth context  */}
      </div>
      <div className="GiftList" > 
      { recipientInfo.map((info) => {
        return (<RecipientCard key={info._id} name={info.name} img={info.personPicture} />)
      })}
      </div>

      <h2> New Event? Create a new List! </h2>
      <Button href="/addNewList" type="button" class="btn btn-outline-primary">Add New List</Button>
      </div>
    );
  }
  
  export default ProfilePage;


  // 1. axios -> liste von Recipiernt 
  // 2. map 
  // 3. pro Recipient eine Card 