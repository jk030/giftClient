import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, userName };

    // TODO: here the API URL is hardcoded as the .env URL is not being recognized.
    axios.post('http://localhost:5005/auth/signup', requestBody)
        .then((response) => {
            console.log(response)
            navigate('/login');
        })
        .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        })
  };

  return (
    <div> 
       <img className="imgSignUpPage" src="/Img/asma-alrashed-2ilpjYv8gXo-unsplash.jpg" alt="present"/>
    <div className="SignupPage-Container">
      <p className="headline">Create an account </p>
      <p className="Details">Please enter your details.</p>

      <form onSubmit={handleSignupSubmit} >
    
      <label>Username *</label>
        <input 
          type="text"
          name="userName"
          value={userName}
          onChange={handleUserName}
        />
          
        <br />


        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
   
        <br />

        <label>Password *</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button className="signUpbtn" type="submit">Create account</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p className="Details">Already have account?</p>
      <a className="signUpbtn" href="/login">Login</a>
    </div>
    </div>
  )
}

export default SignupPage;
