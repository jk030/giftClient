import { Link } from "react-router-dom";
import React from "react";

function RecipientCard ( { name, picturePerson, _id } ) {

  return (
    <div className="RecipientCard">
      <Link to={`/listPage/${_id}`}>
      {/* <img src={picturePerson}></img> */}
        <h3>{name}</h3>
      </Link>
    </div>
  );
}

export default RecipientCard