import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
// import Navbar from './components/Loading/Navbar';
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import RecipientPage from "./pages/RecipientPage.jsx"
import SignupPage from "./pages/SignupPage"
// import routes from "./config/routes";

function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profilePage" element={<ProfilePage/>}/>
<<<<<<< HEAD
        <Route path="/listPage" element={<ListPage/>}/> 
=======
        <Route path="/recipientPage" element={<RecipientPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
>>>>>>> 9377bc77e4e931d241e4e8e2c94352a67849c54d
      </Routes>
    </div>
  );
}

export default App;
