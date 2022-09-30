import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import {AuthContext} from '../context/auth.context';

function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// const [errorMessage, setErrorMessage] = useState(undefined);

const handleEmail = (e) => setEmail(e.target.value);
const handlePassword = (e) => setPassword(e.target.value);
// const { storeToken, authenticateUser } = useContext(AuthContext);

const navigate = useNavigate();
 
const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

 axios.post(`${process.env.MONGODB_URI}/auth/login`, requestBody)
.then((response) => {
// // Request to the server's endpoint `/auth/login` returns a response
// // with the JWT string ->  response.data.authToken
 //console.log('JWT token', response.data.authToken );
//     storeToken(response.data.authToken) // store in my localStorage the authToken
//     authenticateUser() // verify token is valid to get the user information from the server 
    navigate('/');                             // <== ADD      
})
// .catch((error) => {
//     const errorDescription = error.response.data.message;
//     setErrorMessage(errorDescription);
// })
};

    return (
     <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  onChange={handlePassword}/>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        
            {/* https://react-bootstrap.github.io/forms/overview/  if there is issues read the docs here it sais something about controll etc*/}
        </Form>

    {/* { errorMessage && <p className="error-message">{errorMessage}</p> } */}

     </div>
    )
}

export default LoginPage 