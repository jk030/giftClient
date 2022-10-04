import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate( { children } ) {
//  we use props.children to access the content passed between <isPrivate> and the </IsPrivate> tags
//  Using the useContext hook we access the values isLoggedIn and isLoading from the AuthContext.
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // If the authentication is still loading render:
  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
  // If the user is not logged in 
    return <Navigate to="/login" />;
  } else {
  // If the user is logged in, allow to see the page 
    return children;
  }
}

export default IsPrivate;
