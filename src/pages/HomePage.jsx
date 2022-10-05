import "../App.css";
// import React from "react";
// import axios from "axios";
// import 
import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
//import RecipientCard from "../components/RecipientCard"

function HomePage() {
  const [recipientInfo, setRecipientInfo] = useState([]); 
  console.log(recipientInfo)
  const [filteredRecipient, setFilteredRecipient] = useState([]); 
  const [search, setSearch] = useState ("")
  const handleSearch = (e) => setSearch(e.target.value);

   const getRecipientInfo = () => {
    const storedToken = localStorage.getItem("authToken");
      axios
      .get(`${process.env.REACT_APP_API_URL}/api/recipients`,{ headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const allRecipients = response.data;
        setRecipientInfo(allRecipients)
        setFilteredRecipient(allRecipients)
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
          return recipient.name.toLowerCase().includes(search.toLowerCase())
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
          <p className="headlineHomePage">You're a last minute shopper? Always late with buying presents? Everytime the same hustel? <br/>Use GoodTimes, collect ... </p>
          <a href="/signup"><button className="signUpbtn">Create account</button></a>
          </div>
        
        <div className="button-container">
            <a href="#search">
              <div className="button-down"></div>
              </a>
        </div>
          
          

      <div className="searchForm" id="search"> 
          <form className="form" >
          <label className="headlineSearchForm">Search for public Lists:</label>
              <input id="search" type="text" name="search" value={search} placeholder="Who are you looking for ?" onChange={handleSearch}/> 
            {filteredRecipient.length !== 0 && filteredRecipient.map((info) => {
            return (
              <ul class="cards"> 
                <li> 
                    <a href={`/listPage/${info?._id}`} class="card" > 
                    <div class="card__background"> This List is for: <br /> {info?.name} </div>
                    {/* <img src={info?.imageRecipient} class="card__image" alt="" alt="Recipient" /> */}
                      <div class="card__overlay" key={info?._id}> 
                            <div class="card__header">
                              <svg class="card__arc" ><path /></svg>  
                              {/* xmlns="http://www.w3.org/2000/svg" */}
                              
                                  <div class="card__header-text">  
                                  <img src={info?.imageRecipient} class="card__thumb"  alt="Recipient" />
                                      {info?.user?.userName && <h4 class="card__status"> Created by: {info?.user?.userName}</h4>}
                                  </div>
                                  <Link to={`/listPage/${info?._id}`}> <button className="signUpbtn">See Gift List</button> </Link>  
                                  <Link to={`/profilePage/${info?.user?._id}`}> <button className="signUpbtn"> See {info?.user?.userName}'s Profile</button> </Link> 
                            </div>
                        </div>
                    </a>
                </li>
              </ul>
            )
      })}
        </form>
    </div>
    </div>
  );
}

export default HomePage;


