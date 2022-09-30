import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
// import { useContext } from "react";                     

function NavbarGlobal() {
  // const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar>
     <Container>
      <Link to="/">Good Times</Link>

      {/* {isLoggedIn && (
        <>
          <Link to="/profile"><button>Profile</button></Link>        
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
  */}
      {/* {!isLoggedIn && (
        <>
          <Link to="/login"> <button>Login</button> </Link>
           <Link to="/signup"> <button>Register</button> </Link>
        </>
      )} */}
      </Container>
    </Navbar>
  );
}

export default NavbarGlobal;