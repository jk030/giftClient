import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useContext } from "react";   
import { AuthContext } from "../context/auth.context";                  

function NavbarGlobal() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    
    <Navbar className="navbar navbar-light bg-light">
     <Container className="navbar-brand navbar-expand-lg">
      <Link className="GoodTimes" to="/">Good Times</Link>

      {isLoggedIn && (
        <>
          <Link to="/profile"><button>Profile</button></Link>        
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

       {!isLoggedIn && (
        <>
          <Link to="/login"> <button>Login</button> </Link>
           <Link to="/signup"> <button>Register</button> </Link>
        </>
      )}
      </Container>
    </Navbar>
  );
}

export default NavbarGlobal;