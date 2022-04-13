import React from 'react'
import "./add.css"
import { Form, Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap'




const Add = () => {
  
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${name}`)
        sending(name)
    }
   
    let sending = async (chatbotname) => {
      console.log("send to the server")
     try {

       await fetch("http://localhost:4152/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                chatbotname: chatbotname
            


            })
        })
     } catch (err) { console.log(err) };
    }
          



  return (
  

     <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="plaintext">
                    <Form.Label column sm=".5">
                        chatbot name
                    </Form.Label>
                    <Col sm="10">
          <Form.Control onChange={(e) => setName(e.target.value)} type="plaintext" placeholder="enter chatbot name" />
                    </Col>
                </Form.Group>
               
             <div className="buttons">
               
                    <div className="button">     <Button onClick={handleSubmit } variant="secondary" >ADD</Button></div>  
                    <div className="button">         <Button variant="secondary" >PUBLISH</Button></div>  
                 <div className="button">    <Button variant="secondary" >TRAIN</Button></div>  
            
                </div>
            </Form>

  )
}




export default Add;
