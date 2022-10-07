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
                <Link className="GoodTimes" to="/">GoodTimes</Link>
              </div>
              <div className="Navbar1-2"> 
                {isLoggedIn && (
                  <div className="containerLogOut">
                    <a className="navLink1" href={`/profilePage/${user._id}`}><p>Profile</p></a> 
                    <p onClick={logOutUser} className="navLink1">Logout</p>
                  </div>
                    )}
                {!isLoggedIn && (
                      <div className="containerLogOut">
                        <a className="navLink1" href={"/login"}> <p>Login</p></a> 
                        <a className="navLink1" href={"/signup"}> <p>Register</p></a>
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