// import RecipientCard from "../components/RecipientCard"
import RecipientList from "../components/RecipientList"
// import {AuthContext} from ...
import React from "react";

function ProfilePage() {
  
    return (
      <div className="Profile">
        
        <RecipientList refreshList={getProfileDetails} />
        
    {/* not sure what we iterate over */}

        {/* {user} --> wait for Auth context  */}


        {/* {profile.map((profile) => <RecipientCard key={._id} {...project} />  )}  */}

      
      </div>
    );
  }
  
  export default ProfilePage;


// function ProfilePage () {

//     return (
//         <div>
//         <h2>Hello</h2>
//         {/* <RecipientList />
        
//         <RecipientCard /> */}

//         </div>
//     )
// }

// export default ProfilePage 