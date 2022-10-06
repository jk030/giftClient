import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Link
import axios from "axios";
import "../styling/SignupPage.css";



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

    axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, requestBody)
        .then((response) => {
          console.log(requestBody)
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
             
              <form onSubmit={handleSignupSubmit} >
              <p className="DetailsSignUpPage">Please enter your details.</p>
              <label className="Details2"> Username *</label>
                <input 
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={handleUserName}
                />     
                <br />
                <label className="Details2" >Email *</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                />
                <br />
                <label className="Details2" >Password *</label>
                <input 
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                />
                <button className="signUpbtn" type="submit">Create account</button>
                <p className="DetailsSignUpPage">Already have account?</p>
              <a className="signUpbtn" href="/login">Login</a>
              { errorMessage && <p className="error-message">{errorMessage}</p> }
              </form>
           
            
            </div>
    </div>
  )
}

export default SignupPage;
