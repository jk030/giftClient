import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
// const API_URL = "http://localhost:5005";


function RecipientCard () {
  const [recipientInfo, setRecipientInfo] = useState([]); 
  console.log(recipientInfo)
  const { recipientId } = useParams();
  
  const getRecipientInfo = () => {
      const storedToken = localStorage.getItem("authToken");
        axios
        .get(`${process.env.API_URL}/recipients/${recipientId}`,{ headers: { Authorization: `Bearer ${storedToken}` } })
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
    <div className="RecipientCard">
    { recipientInfo.map((info) => {
      
      return (
        <div> 
          <h1>{info.name} </h1>
          <img src={info.imageRecipient} alt="Recipient" width="100"/>
          {console.log(info.imageRecipient)}
          <Link to={`/listPage`}></Link>
        </div>
    )
    })}
    </div>
  );
}

export default RecipientCard