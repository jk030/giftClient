import { useState, useEffect, useParams } from "react";
import RecipientCard from "../components/RecipientCard"
import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const API_URL = "http://localhost:5005";


function ProfilePage(props) {
  const [recipientInfo, setRecipientInfo] = useState(null); 
  const { profiletId } = useParams();
  
  const getRecipientInfo = () => {
      const storedToken = localStorage.getItem("authToken");
        axios
        .get(`${process.env.API_URL}/profile/${profiletId}`,
      { headers: { Authorization: `Bearer ${storedToken}` } })
        .then((response) => {
          const oneRecipient = response.data;
          setRecipientInfo(oneRecipient)
          })
        .catch((error) => console.log(error));
    };

    useEffect(() => {
      getRecipientInfo();
    }, [] );
  
  
    return (
      <div className="Profile">
        <div className="ProfileInfo"> 
            <h1> Welcome back! </h1> 
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