import React from 'react'
import "./add.css"
import { Link } from "react-router-dom";
import {useState} from 'react'
import { Form, Button ,InputGroup} from 'react-bootstrap'
const has=true


const keyword=()=>{
    if(has==true){
        return null
    }
}

const enterKeyword = ()=>{
    return "<h1>enter your name</h1>"
}

export default function Add() {
    const [keywords, setKeywords] = useState("");
    return (
        <div>
            
                {/* <Form.Control size="lg" type="text" placeholder="Large text" /> */}
                <h1 className="addQuis"> Question</h1>
                <Form.Control className="question" type="text" placeholder="enter Question"  />
 
                <h1 className="answer-text"> Answer</h1>
                <br/>
                <Form.Control className="answer" type="text" placeholder=" enter answer"  />
   {/* <div className="add-label"> <input type="checkbox" checked="checked" onChange={}/> <label >Add Keyword</label></div> */}
            <h1 className="answer-text"> Add Keyword</h1>
           
            <Form.Control className="answer" type="text" placeholder=" enter keyword" />
           <Link to="/mainpage">   <Button variant="warning" className="add-button"  >Add</Button>
            </Link>  
           <h1>     {keywords} </h1>
        
           
                {/* <Form.Control size="sm" type="text" placeholder="Small text" /> */}
            

        </div>
    )
}
