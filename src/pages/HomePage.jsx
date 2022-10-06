import "../App.css";
import React from "react"
import {useState, useEffect, useContext} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import "../styling/HomePage.css";

import { AuthContext } from "../context/auth.context";

function HomePage() {
  const [recipientInfo, setRecipientInfo] = useState([]); 
  const [filteredRecipient, setFilteredRecipient] = useState([]); 
  const [search, setSearch] = useState ("")
  const { isLoggedIn } = useContext(AuthContext);
  
  
  const handleSearch = (e) => setSearch(e.target.value);

   const getRecipientInfo = () => {
    const storedToken = localStorage.getItem("authToken");
      axios
      .get(`${process.env.REACT_APP_API_URL}/api/recipients`,{ headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const allRecipients = response.data;
        const allPublicRecipients = allRecipients.filter( recipient => { return recipient.privacy === true})
        setRecipientInfo(allPublicRecipients)
        setFilteredRecipient(allPublicRecipients)
        })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getRecipientInfo();
  }, [] );

  useEffect(()=>{
    if(search === ""){
      setFilteredRecipient(recipientInfo);
    }
    else {
      const filtered = recipientInfo.filter(
        recipient => {
          return recipient.name.toLowerCase().includes(search.toLowerCase()) || recipient.user.userName.toLowerCase().includes(search.toLowerCase())
        }
      )
      setFilteredRecipient(filtered);
    }
    // eslint-disable-next-line
  }, [search])

  return (
    <div>
        <img className="imgHomePage" src="/Img/mia-golic-6JtuGvLzh20-unsplash.jpg" alt="gift"/> 
        <div  className="HomePage-Container"> 
             <p className="headlineHomePage">You're a last minute shopper? Always late with buying presents? Everytime the same hustel? <br/> Plan ahead for the <br/><strong className="fontGoodTimes">GoodTimes !</strong></p>
            {!isLoggedIn && <a href="/signup"><button className="createAccountBtn">Create account</button></a>}
        </div>
        <div className="button-container">
            <a href="#search">
              <div className="button-down"></div>
            </a>
        </div>

      <div className="searchForm"> 
          <form >
          <label className="headlineSearchForm">Search for public Lists:</label>
              <input id="search" type="text" name="search" value={search} placeholder="Who are you looking for ?" onChange={handleSearch}/> 
            {filteredRecipient.length !== 0 && filteredRecipient.map((info) => {
            return (
              <ul className="cardsHomePage" key={info?._id}> 
                <li> 
                    <a href={`/listPage/${info?._id}`} className="card" > 
                    <div className="card__background"> This List is for: <br /> {info?.name} </div>
                      <div className="card__overlay" key={info?._id}> 
                            <div className="card__header">
                              <svg className="card__arc" ><path /></svg>  
                                  <div className="card__header-text">  
                                  <img src={info?.imageRecipient} className="card__thumb"  alt="Recipient" />
                                      {info?.user?.userName && <h4 className="card__status"> Created by: {info?.user?.userName}</h4>}
                                  </div>
                                  <Link to={`/listPage/${info?._id}`}> <button className="signUpbtn">See Gift List</button> </Link>  
                                  <Link to={`/profilePage/${info?.user?._id}`}> <button className="signUpbtn"> See {info?.user?.userName}'s Profile</button> </Link> 
                            </div>
                        </div>
                    </a>
                </li>
              </ul>
              )})}
          </form>
      </div>
    </div>
  );
}

export default HomePage;


