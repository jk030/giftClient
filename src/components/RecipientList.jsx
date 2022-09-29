import { useState } from "react";
import axios from "axios";

// const API_URL = "http://localhost:5005";

function RecipientList(props) {
 

  return (
    <div className="AddGiftList">
      <h3>List:</h3>

      <div> 
      <RecipientCard />
      </div>
    </div>
  );
}

export default RecipientList;


