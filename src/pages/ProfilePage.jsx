import RecipientCard from "../components/RecipientCard"
import React from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
//import { Button } from "react-router-dom";
import {Button} from "react-bootstrap"

import { useState, useEffect } from "react";

import { useContext } from "react";

import {AuthContext} from '../context/auth.context';




function ProfilePage(props) {
  const { name } = useContext(AuthContext);
  const {userId} = useParams();
  console.log(`these are the params: ${userId}`);
  console.log(props)

    return (
      <div className="Profile">

      <h2>hi : {userId}</h2>

      <h2> New Event? Create a new List! </h2>
      <Button href="/addNewList" type="button" className="btn btn-outline-primary">Add New List</Button>

        <div className="Box1ProfileInfo"> 
        <h1 className="layer1"> Welcome back {name}! </h1> 
            <div className="parent">
              <img className="image1" src="/Img/image 22.png" alt="gift" width={300} />
              <img className="image2" src="/Img/Rectangle 19.png" alt="gift" width={400} />
            </div>
          
        </div>

        <div className="Box2GiftList" > 
        <h1> List: </h1>
        <RecipientCard />
       

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