import React from 'react'
import auth from "../auth/auth"
export default function TestAuth() {
  return (
    <div>
    <h1>auth</h1>
    
    <button onClick ={()=>{
console.log(auth.isAuthenticated())
    }}>click me</button>

    </div>
  )
}
