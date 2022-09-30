import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
//import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import ListPage from "./pages/ListPage.jsx"
//import routes from "./config/routes";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/loginPage" element={<LoginPage/>}/>
        <Route path="/profilePage" element={<ProfilePage/>}/>
        <Route path="/listPage" element={<ListPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;
