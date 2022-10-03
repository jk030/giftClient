import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useContext } from "react";   
import { AuthContext } from "../context/auth.context";                  

function NavbarGlobal() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
   <div> 

    <Navbar className="navbar navbar-light bg-light">
    <div className="container">
     
        <div className="col1" > 
         <Link className="GoodTimes" to="/">Good Times</Link>
        </div>

        <div className="col2">
          {isLoggedIn && (
            <>
              <Link to="/profilePage/:id"><button className="navLink">Profile</button></Link>        
              <button onClick={logOutUser}>Logout</button>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link to="/login"> <button className="navLink">Login</button> </Link>
              <Link to="/signup"> <button className="navLink">Register</button> </Link>
            </>
          )}
        </div>
      </div>
    </Navbar>
    <img className="imgNavbar"/>
    </div> 
  );
}

export default NavbarGlobal;