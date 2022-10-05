import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect , useContext} from "react"
import axios from "axios";
import AddGift from "../components/AddGift"
import { AuthContext } from "../context/auth.context";


//import { Button } from "react-router-dom";
    

function ListPage (props) {
   const { user } = useContext(AuthContext)
 //  console.log("this is the user",user)
    const { recipientId } = useParams();
    const [recipientInfo, setRecipientInfo] = useState({})
    // const [giftDetails, setGiftDetails] = useState({})
    const [ name, setName ] = useState("");
    const [ personalDetails, setPersonalDetails ] = useState("");
    const [ preferences, setPreferences ] = useState("");
    const [ unwanted, setUnwanted ] = useState("");

    const [edit,setEdit] = useState (false) //use the setEdit only when logged in 


    const getRecipientInfo = () => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/recipients/${recipientId}`)
        .then((response) => {
          const recipientDetails = response.data;
        //   console.log(recipientDetails)
          setRecipientInfo(recipientDetails)
          })
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      getRecipientInfo();
      // eslint-disable-next-line
    }, [] );

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { name, personalDetails, preferences, unwanted };
        
        axios
        // TODO: will need to check the get route i.e. listPage OR recipientPage 
            .put(`${process.env.REACT_APP_API_URL}/api/recipients/${recipientId}`, requestBody)
            .then((response) => {
                // might need an async await here
                getRecipientInfo()
                setEdit(true)
            });
    };



    useEffect(() => {
        axios
        // TODO: will need to check the get route i.e. listPage OR recipientPage 
            .get(`${process.env.REACT_APP_API_URL}/api/recipients/${recipientId}`)
            .then((response) => {
                const oneRecipient = response.data;
                setName(oneRecipient.name);
                setPersonalDetails(oneRecipient.personalDetails);
                setPreferences(oneRecipient.preferences);
                setUnwanted(oneRecipient.unwanted);
            })
            .catch((error) => console.log(error));
    }, []);





if(user === null) {
    return <p>Loading...</p>
}

return (
    <div className="list">

    
    {edit?
     <div className="ContainerRecipientDetailsListPage"> 
        <h2>{recipientInfo.name}</h2>
        <img src={recipientInfo.imageRecipient} alt="Recipient" width={200}/>
        <p>{recipientInfo.personalDetails}</p>
        <article>{recipientInfo.preference}</article>
        <article>{recipientInfo.unwanted}</article>
        {edit && user._id === recipientInfo.user &&  <button onClick={()=> setEdit(false)}>Edit this Recipient</button> }
    </div>  :     
    
        <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <label>Personal Details:</label>
                <textarea
                type="text"
                name="personalDetails"
                value={personalDetails}
                onChange={(e) => setPersonalDetails(e.target.value)}
                />

                <label>Preferences:</label>
                <textarea
                type="text"
                name="preferences"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                />

                <label>Add Past Gifts:</label>
                <textarea
                type="text"
                name="unwanted"
                value={unwanted}
                onChange={(e) => setUnwanted(e.target.value)}
                />

                <button type="submit" >Update Recipient</button>
                {/* <button onClick={deleteRecipient}>Delete Recipient</button> */}
            </form>
    }


    <ul> 
    {recipientInfo?.gifts?.length !== 0 && recipientInfo?.gifts?.map(gift => {
        return <li key={gift._id}>
                    <h2>{gift.title}</h2> 
                    <img src={gift.imageGift} alt="gift_image"/>
                    <p>{gift.priceSpan}</p> 
                    <a href={gift.link}><p>Link</p></a>
                    <p> {gift.occasion}</p>
                    <p>{gift.notes}</p>
                </li>
                
    })}
    </ul>


    <div className="ContainerAddGift">
                <AddGift recipientId={recipientId}  getRecipientInfo={getRecipientInfo}/>
            </div>
  


  
    </div>
    )
}

export default ListPage 



//  {Object.entries(recipientInfo.gift).map(allGifts => {
//                 console.log("this is the ", recipientInfo.gift)
//             return (
//                 <div>
//                 {!allGifts ? <></> : <>
//             <h2>{allGifts[0].title}</h2> 
//             <h2> {allGifts[0].occasion}</h2>
//             </>}
//                 </div>
//             )
//         })}