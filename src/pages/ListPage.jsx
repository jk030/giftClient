import React from "react";
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
//import { Button } from "react-router-dom";
    

function ListPage (props) {
    const {recipientId} = useParams();
    const [recipientInfo, setRecipientInfo] = useState({})

    console.log(recipientInfo)

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
    }, [] );


return (
    <div className="list">
        <div> 
            <h2>{recipientInfo.name}</h2>
            <img src={recipientInfo.imageRecipient} width={200}/> 
        </div>
        <div>
            <p>{recipientInfo.personalDetails}</p>
        </div>
        <div>
            <article>{recipientInfo.preference}</article>
        </div>
        <div>
            <article>{recipientInfo.unwanted}</article>
        </div> 

            {Object.entries(recipientInfo.gift).map(allGifts => {
                console.log("this is the ", recipientInfo.gift)
            return (
                <div>
                {!allGifts ? <></> : <>
            <h2>{allGifts[0].title}</h2> 
            <h2> {allGifts[0].occasion}</h2>
            </>}
                </div>
            )
        })}
             


     
        {/* {recipientInfo.gifts.map(allGifts => {
            return (
                <div>
                {!allGifts ? <></> : <>
            <h2>{allGifts[0].title}</h2> 
            <h2> {allGifts[0].occasion}</h2>
            </>}
                </div>
            )
        })} */}

    
        
    </div>
    )
}



export default ListPage 


{/* <div> 
    {!recipientInfo.gifts ? <></> : <>
        <h2>{recipientInfo.gifts[0].title}</h2> 
        <h2> {recipientInfo.gifts[0].occasion}</h2>
    </>}
    </div> */}