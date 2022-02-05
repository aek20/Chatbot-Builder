
import React from 'react';
import {useState, useEffect} from "react"



export default function UseEffect() {
  
const [data,setData]=useState({});

useEffect(async ()=>{
  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      console.log(json)
  setData(json)
     } )
    console.log("hi nigga")


},[])
  return <div>{data.id} </div>;   

 
}
