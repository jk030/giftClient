import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import { useContext } from "react";   
import { AuthContext } from "../context/auth.context";                

function NavbarGlobal() {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);


  return (
   <div className="navbar-container"> 
      <Navbar>
          <div className="Navbar-1">
              <div className="Navbar1-1" > 
                <Link className="GoodTimes" to="/">Good Times</Link>
              </div>
              <div className="Navbar1-2"> 
                {isLoggedIn && (
                  <div>
                    <a href={`/profilePage/${user._id}`}><button className="navLink1">Profile</button></a> <button onClick={logOutUser} className="navLink2">Logout</button>
                  </div>
                    )}
                {!isLoggedIn && (
                    <div>
                      <a href={"/login"}> <button className="navLink1">Login</button></a> <a href={"/signup"}> <button className="navLink2">Register </button></a>
                    </div>
                    )}
              </div>
          </div>
      </Navbar>
      <div className="imgNavbar" alt="Navbar" />
    </div> 
  );
}

export default NavbarGlobal;