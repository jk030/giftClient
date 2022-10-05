import React from "react";
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import AddGift from "../components/AddGift"
import { Link } from "react-router-dom"

//import { Button } from "react-router-dom";
    

function ListPage (props) {
    const { recipientId } = useParams();
    const [recipientInfo, setRecipientInfo] = useState({})
    // const [giftDetails, setGiftDetails] = useState({})

    console.log(recipientInfo.gifts)

    const getRecipientInfo = () => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/recipients/${recipientId}`)
        .then((response) => {
          const recipientDetails = response.data;
          console.log(recipientDetails)
          setRecipientInfo(recipientDetails)
          })
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      getRecipientInfo();
      // eslint-disable-next-line
    }, [] );

return (
    <div className="list">

    <div className="ContainerRecipientDetailsListPage"> 
        <h2>{recipientInfo.name}</h2>
        <img src={recipientInfo.imageRecipient} alt="Recipient" width={200}/>
        <p>{recipientInfo.personalDetails}</p>
        <article>{recipientInfo.preference}</article>
        <article>{recipientInfo.unwanted}</article>
    </div>

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