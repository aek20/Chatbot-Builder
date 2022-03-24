import React from 'react'
import auth from "../auth/auth"
import {useNavigate} from "react-router-dom";
export default function TestAuth(props) {

const history =useNavigate()
  return (

    <div>
    <h1>auth</h1>
    
    <button onClick ={()=>{
auth.login(()=>{
 history("/mainpage")
})
    }}>click me</button>

    </div>
  )
}
