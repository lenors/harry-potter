import axios, { Axios } from "axios";
import React, {useState, useEffect } from "react";



const Main = () => {

const [card, setCard] = useState([])

useEffect(()=>{
    axios.get(' https://hp-api.herokuapp.com/api/characters')
    .then(res =>{
        setCard(res.data)
        console.log(res)
    })
    .catch(err => {
        console.log('foi mal meu chefe', err)
    })
},[card])




    return(
        <div>
        {card.map((item)=>(
            <div>
         <ul>
            <li>{item.name}</li>
            <li>{item.house}</li>
            <li>{item.gender}</li>
            <li>{item.yearOfBirth}</li>
         </ul>
         <figure>
            <img src={item.image} alt=""  />
         </figure>
         
         </div>
        ))}
        </div>
    )
}

export default Main