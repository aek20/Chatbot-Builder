import React from 'react'
import "./add.css"
import { Form, Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {useState} from 'react'
import {  Button ,InputGroup} from 'react-bootstrap'
import chatbc from "../../img/addnewchatimg.png"
import loading from '../../img/loading.jpg'



const Add = () => {
    const [chatbot, setChatbotName] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
 
    function handleSubmit(e) {
        e.preventDefault();
       
        sending(chatbot, question, answer)


    }
    function handleTrain(e) {
        e.preventDefault();

        train()


    }
    function handlepublish(e) {
        e.preventDefault();

        publish()


    }
   
    let sending = async (chatbotname, question, answer, keyword) => {
        await fetch("http://localhost:4052/add/messages", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                chatbotname: chatbotname,
                question: question,
                answer: answer,
 


            })
        });
    }
    let train = async () => {
        await fetch("http://localhost:4166/train", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
     
        }
     
        );
       
    }
    let publish = async () => {
        await fetch("http://localhost:4166/publish", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        
    })
}
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="plaintext">
                    <Form.Label className="first-text" column sm=".5">
                        chatbot name  <br /> <br /> 
                    </Form.Label>
                    <Col sm="20" >
                        <Form.Control className="input" onChange={(e) => setChatbotName(e.target.value)} type="plaintext" placeholder="enter chatbot name" />
                    </Col>
                </Form.Group>
                <br />  <br />
                <Form.Group as={Row} className="mb-3" controlId="plaintext">
                    <Form.Label className="text" column sm=".5">
                        questions <br /> <br /> 
                    </Form.Label>
                    <Col sm="20" >
                        <Form.Control className="input" onChange={(e) => setQuestion(e.target.value)} type="plaintext" placeholder="enter question" />
                    </Col>
                </Form.Group> 
                <br /> <br />
                <Form.Group as={Row} className="mb-3" controlId="plaintext">
                    <Form.Label className="text" column sm=".5">
                        answers
                        <br /> <br /> 
                    </Form.Label>
                    <Col sm="20">
                        <Form.Control className="input" onChange={(e) => setAnswer(e.target.value)} type="plaintext" placeholder="enter answer " />
                    </Col>
                </Form.Group>
           

         \
             <div className="buttons">
               
                    <div className="button">     <Button onClick={handleSubmit } variant="secondary" >ADD</Button></div>  
                    <div className="button">         <Button variant="secondary" onClick={handleTrain}>PUBLISH</Button></div>  
                    <div className="button">    <Button className="train"variant="secondary" onClick={handlepublish}>TRAIN</Button></div>  
            
                </div>
            </Form>
        </div>
    );
}




export default Add;
