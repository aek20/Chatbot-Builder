import React from "react";
import "./landingPage.css"
import background from '../../img/main-removebg-preview.png'
import play from "../../img/icons8-play-64.png"
import logo from '../../img/logo3.png'
import {useNavigate} from 'react-router-dom'

 const Landingpage2=()=>  {
   

        const navigate = useNavigate();
        return (
            <div className="landingpagebody">
              
             <div className="main-image">
                    <iframe width="560" height="315" src="https://www.youtube.com/watch?v=gP_fj5lChGA" frameborder="0" allowfullscreen></iframe>
              </div>
                    <div className="main-content">
                  
                        <h1 > chatbot builders </h1>
                        <p>
                            With just a few clicks, you can build a chatbot that answers the most common questions without coding knowledge
                        </p>
                        <div className="main-buttons">

                            <a href="#" className=" main-button main-btn " onClick={()=>{  navigate("/signin")}}>Get Started</a>
                      
                        </div>
                    </div>
             
             
          

            </div>

        );

    }


export default Landingpage2;
