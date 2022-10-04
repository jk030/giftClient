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
  const [search, setSearch] = useState ("")
  const handleSearch = (e) => setSearch(e.target.value);
const filtered = recipientInfo.filter(
  recipient => {
    return recipient.name.toLowerCase().includes(search.toLowerCase())
  }
)


  const getRecipientInfo = () => {
    const storedToken = localStorage.getItem("authToken");
      axios
      .get(`${process.env.REACT_APP_API_URL}/api/recipients`,{ headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const allRecipients = response.data;
        setRecipientInfo(allRecipients)
        })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRecipientInfo();
  }, [] );




  return (
<<<<<<< HEAD
    <div className="App">
     <h2>You're a last minute shopper? Always late with buying presents? Everytime the same hustel? <br/>Use GoodTimes, collect ... </h2>
=======
    <div>
        <img className="imgHomePage" src="/Img/mia-golic-6JtuGvLzh20-unsplash.jpg" alt="gift"/> 
          <div  className="HomePage-Container"> 
          <p className="headlineHomePage">You're a last minute shopper? Always late with buying presents? Everytime the same hustel? <br/>Use GoodTimes, collect ... </p>
          <button className="signUpbtn" href="/signup">Create account</button>
          </div>

     <div className="searchForm">
>>>>>>> master
     <form >
     <label>Search for public Lists:</label>
        <input 
          type="email"
          name="search"
          value={search}
          onChange={handleSearch}
        />
<<<<<<< HEAD
      <button type="submit">Search</button>
     </form>
  
    { filtered.map((info) => {
=======
      <button className="signUpbtn" type="submit">Search</button>
     </form>
     { filtered.map((info) => {
>>>>>>> master
      return (
        <div key={info._id}> 
        <h3>This List is for: {info.name} </h3>
        <img src={info.imageRecipient} alt="Recipient pictrure" width="100"/>
        {/* {console.log(info.user[0].userName)} */}
        <h4>created by: {info.user[0].userName}</h4>
        {/* <Button href="/addNewList" type="button" className="btn btn-outline-light">Add New List</Button> */}
        </div>
    )
    })}
<<<<<<< HEAD

=======
     </div>

   
>>>>>>> master
    </div>

  );

}

export default HomePage;
