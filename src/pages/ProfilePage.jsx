import RecipientCard from "../components/RecipientCard"
import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import {AuthContext} from '../context/auth.context';



function ProfilePage(props) {
  const { user } = useContext(AuthContext);
  

    return (
      <div className="Profile">

        <div className="Box1ProfileInfo"> 
        <h1 className="layer1"> Welcome back {user._id}! </h1> 
            <div className="parent">
              <img className="image1" src="/Img/image 22.png" alt="gift" width={300} />
              <img className="image2" src="/Img/Rectangle 19.png" alt="gift" width={400} />
            </div>   
        </div>
        <div className="Box2GiftList" > 
        <h1> List: </h1>
        
        
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