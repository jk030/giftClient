import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import {useState, useEffect} from "react"
import React from "react";

function RecipientCard ( { name, picturePerson, _id } ) {
    const [recipientInfo, setRecipientInfo] = useState([]);


    const getRecipientInfo = () => {
    //   const storedToken = localStorage.getItem("authToken");
        axios
        .get(`${process.env.REACT_APP_API_URL}/profilePage`)// { headers: { Authorization: `Bearer ${storedToken}` } })
        .then((response) => setRecipientInfo(response.data))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
        getProfileDetails();
    }, [] );

  return (
    <div className="RecipientCard">
      <Link to={`/ListPage/${_id}`}>
      {/* <img src={picturePerson}></img> */}
        <h3>{name}</h3>
      </Link>

      <h2> New Event? Create a new List! </h2>
      <Button href="/addNewList" type="button" class="btn btn-outline-primary">Add New List</Button>
    </div>
  );
}

export default RecipientCard