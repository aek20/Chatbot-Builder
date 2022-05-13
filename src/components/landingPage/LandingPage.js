import React from 'react'
import { Carousel ,Button}from 'react-bootstrap';
import landPic from '../../img/main.jpg'
import './landingPage.css'
import { Link } from "react-router-dom";
import mainImg from '../../img/main.jpg'



export default function LandingPage() {
    return (
        <div>

            <h1 className="rotate-scale-up" >you don't have any chatbot?? create New one 
        <br />
                <Link to="/signin">      <Button variant="warning" >CREATE</Button></Link>
            </h1>
       
            
     
         
        </div>
    )
}
// const getFocus=()=>{

// }
