import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context"; 


// const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);


  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, requestBody)
        .then((response) => {
            console.log('JWT token', response.data.authToken);
            storeToken(response.data.authToken);
            authenticateUser();
            navigate(`/profilePage/${response.data.userId}`);
        })
        .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription)
        })
  };
  
  return (
    <div >
        
          <img className="imgSignUpPage" src="/Img/annie-spratt-7jKyakBu3vM-unsplash.jpg" alt="present"/>
              <div className="SignupPage-Container">
                  <p className="headlineLogin">Login</p>
                  <form onSubmit={handleLoginSubmit}>
                    <label>Email:</label>
                    <input 
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleEmail}
                    />
                    <br />
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handlePassword}
                    />
                    <button className="signUpbtn" type="submit">Login</button>
                    { errorMessage && <p className="error-message">{errorMessage}</p> }
                    <p className="Details" >Don't have an account yet?</p>
                    <Link className="signUpbtn" to={"/signup"}> Sign Up</Link>
                  </form>
               
              </div>
    </div>
  )
}

export default LoginPage;

