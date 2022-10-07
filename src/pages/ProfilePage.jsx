import React from "react"; 
import {useParams, useNavigate} from "react-router-dom"
import { useState, useEffect, useContext} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddRecipient from "../components/AddRecipient"

import "../styling/ProfilePage.css";

import { AuthContext } from "../context/auth.context";



function ProfilePage(props) {

  const {userId} = useParams();
  const [userProfile, setUserProfile] = useState({})
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)




  const getUserInfo = () => {
      axios
      .get(`${process.env.REACT_APP_API_URL}/profilePage/${userId}`)
      .then((response) => {
        const userDetails = response.data;
        // console.log(userDetails)
        setUserProfile(userDetails)
        })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, [] );

  const deleteRecipient = (recipientId) => {        
    console.log(recipientId)          
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/recipients/${recipientId}`)
      .then(() => {
        getUserInfo();
        navigate(`/profilePage/${userId}`);
      })
      .catch((err) => console.log(err));

  };  



    return (
      <div className="Profile">
        <div className="ContainerProfileInfo"> 
                <img className="imageGiftHomePage" src="/Img/image 22.png" alt="gift" />
                <img className="rectangle" src="/Img/Rectangle 19.png" alt="gift" />  
                <div className="headlinePofile"> Welcome back {userProfile.userName}! </div>   
        </div>

        <div className="ContainerGiftList" > 
            <div>
              <h1 className="headlineList" > List for: </h1>
              { Object.keys(userProfile).length !== 0 && userProfile.recipient.map(recipient => {
                return ( 
                  <div className="ContainerRecipients" key={recipient._id}> 
                      <div className="ContainerDetailsImage"> 
                      <h4 className="DetailName"> {recipient.name}</h4> 
                      <img className="imageRecipient" src={recipient.imageRecipient} alt="Recipient"/> <br />  
                      </div>
                    <div style={{display: "flex", justifyContent:'space-around'}}>
                    {!recipient.privacy? <p id="lastMinute" style={{ textAlign: 'right'}} >private</p> : <p id="lastMinute"  style={{ textAlign: 'right'}}>public</p>}
                    <Link to={`/listPage/${recipient._id}`}><button className="btnProfilePage">See Gift List</button></Link>
                    {user._id === userId &&  <button className="btnProfilePage" onClick={()=> deleteRecipient(recipient._id)}>Delete Recipient</button>}
                    </div>
                  
                 </div>     

           )
          })}
        </div>
{user._id === userId &&  
        <div className="ContainerAddRecipient">
                <h2> New Event? Create a new List! </h2>
                <AddRecipient id={userId}  getUserInfo={getUserInfo}/>
            </div>
}

        </div>

      </div>
    );
  
}
  
  export default ProfilePage;


  // 1. axios -> liste von Recipiernt 
  // 2. map 
  // 3. pro Recipient eine Card 