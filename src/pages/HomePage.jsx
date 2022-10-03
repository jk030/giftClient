import "../App.css";
// import React from "react";
// import axios from "axios";
// import 
import {useState} from "react"

function HomePage() {
  const [search, setSearch] = useState ("")
  const handleSearch = (e) => setSearch(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const requestBody = { search };

    // axios.post(`${API_URL}/auth/login`, requestBody)
    //     .then((response) => {
    //         console.log('JWT token', response.data.authToken);
    //         storeToken(response.data.authToken);
    //         authenticateUser();
    //         navigate(`/profilePage/${response.data.userId}`);
    //     })
    //     .catch((error) => {
    //         const errorDescription = error.response.data.message;
    //         setErrorMessage(errorDescription
    //     })

    

  };

  return (
    <div className="App">
     <h2>You're a last minute shopper? Always late with buying presents? Everytime the same hustel? <br/>Use GoodTimes, collect ... </h2>
     <form onSubmit={handleSearchSubmit}>
     <label>Search:</label>
        <input 
          type="email"
          name="search"
          value={search}
          onChange={handleSearch}
        />
      <button type="submit">Search</button>
     </form>



    </div>

  );

}

export default HomePage;
