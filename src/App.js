import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage.jsx"
import ProfilePage from "./pages/ProfilePage"
import SignupPage from "./pages/SignupPage"
import ListPage from "./pages/ListPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

// import routes from "./config/routes";

function App() {
  return (
    <div className="App">
     <Navbar/> 
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<IsAnon> <LoginPage/> </IsAnon>}/>
        <Route path="/profilePage/:userId" element={<IsPrivate> <ProfilePage/> </IsPrivate>}/>
        <Route path="/listPage/:recipientId" element={<ListPage/>}/>
        <Route path="/signup" element={<IsAnon> <SignupPage/> </IsAnon>}/>
      </Routes>
    </div>
  );
}

export default App;
