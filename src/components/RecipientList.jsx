// const API_URL = "http://localhost:5005";
import { Link } from "react-router-dom";
import axios from "axios";


function RecipientList({name, personPicture}) {


  return (

    { getRecipientInfo.map((info) => 

    <div className="RecipientList">
      <h3>List:</h3>
      <p>{name}</p>
      <img src="" />    
      <Link to={`/listPage/${_id}`}><h3>See Gift List</h3></Link>
      </div>
      )} 
  );
}

export default RecipientList;


1. axios -> liste von Recipiernt 
2. map 
3. pro Recipient eine Card 



function ProjectCard ( { title, description, _id } ) {
  
  return (
    <div className="ProjectCard card">
      <Link to={`/projects/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default ProjectCard;