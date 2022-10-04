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
    
  }, [search])




  return (

    <div>
        <img className="imgHomePage" src="/Img/mia-golic-6JtuGvLzh20-unsplash.jpg" alt="gift"/> 
          <div  className="HomePage-Container"> 
          <p className="headlineHomePage">You're a last minute shopper? Always late with buying presents? Everytime the same hustel? <br/>Use GoodTimes, collect ... </p>
          <button className="signUpbtn" href="/signup">Create account</button>
          </div>

      <div className="searchForm"> 
          <form >
          <label>Search for public Lists:</label>
              <input 
                type="email"
                name="search"
                value={search}
                onChange={handleSearch}
              />
            { filteredRecipient && filteredRecipient.map((info) => {
            return (
              <div key={info._id}> 
                <h3>This List is for: {info.name} </h3>
                <img src={info.imageRecipient} alt="Recipient" width="100"/>
                {/* {console.log(info.user[0].userName)} */}
                {info.user.userName && <h4>created by: {info.user.userName}</h4>}
                <Link to={`/profilePage/${info.user._id}`}> <button className="signUpbtn"> see {info.user.userName}'s profile</button> </Link>
                <Link to={`/listPage/${info._id}`}> <button className="signUpbtn">See Gift List</button> </Link>
            </div>
            )
      })}
        </form>
    </div>
    </div>
  );
}

export default HomePage;
