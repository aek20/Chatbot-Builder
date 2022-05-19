import React from 'react';
import '../landingPage/landingPage.css'

import {useEffect ,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, logout } from '../../firebase/firebase.js'
import profile from "../../img/user.png"
import './navbar.css'
import logo from '../../img/logo3.png'
// import { Container, Nav, NavDropdown} from 'react-bootstrap'

const Navbar = () => {
   let [user,setUserState] =useState(false)
    let navigate = useNavigate();
    useEffect(() => {

        auth.onAuthStateChanged(userAuth => {
          
     if(userAuth==null){
setUserState(false)
     }
     else{
         setUserState(true)
     }
  
        })
    }, [])

  let check=()=>{ 
    
     
        if (!user) {
              // User is signed in.
            
              return <ul className="login-nav">
                  <li className="nav-item">
                      <a href="#" onClick={() => { navigate("/signin") }}>Log In</a>
                  </li>
                  <li className="nav-item">
                      <a href="#" class="main-btn" onClick={() => { navigate("/signup") }}>Sign Up</a>
                  </li>
              </ul>
          } else {
              // No user is signed in.
           
            return <div className="profile-container">  <img class="profile" src={profile} /> <a href="#" class="main-btn" onClick={()=>{logout() ;
            navigate('/')}}>LOG OUT</a> </div>

          }
        }
      
    
    return (

        <header id="navbarstick">
             
            <nav className="container">
            <img className='logoimge' src={logo} /> 
                <ul className="primary-nav">
                    <li className="nav-item">  
                        <a href="#" onClick={() => { navigate("/") }}>HOME</a>
                    </li>
                    <li className="nav-item ">
                        <a href="#">DASHBOARD</a>
                    </li>
                    <li className="nav-item ">
                        <a href="#">INBOX</a>
                    </li>
                    <li className="nav-item ">
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            {check() }
            </nav>
           
        </header>



    );
}



export default Navbar;
