import "./chatWindow.css";
import  ChatItem  from "./Chatbot-item";
import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from "react-bootstrap";
export default function App() {
    return (
        <div style={{ marginLeft: 400, marginTop: 30 }}>
            <div
                style={{
                    border: "1px solid black",
                    width: 320,
                    height: 400,
                    overflowY: "scroll",
                    overflowX: "hidden"
        
                }}
                className="App"
            >
                <ChatItem position={"right"} color={"lightblue"} />
                <ChatItem position={"left"} color={"#ffb3b3"} />
                <ChatItem  position={"right"} color={"lightblue"} />
                <ChatItem  position={"left"} color={"#ffb3b3"} />
                <ChatItem position={"right"} color={"lightblue"} />
                <ChatItem  position={"left"} color={"#ffb3b3"} />
                <ChatItem position={"right"} color={"lightblue"} />
                <ChatItem  position={"left"} color={"#ffb3b3"} />
                <ChatItem  position={"right"} color={"lightblue"} />
            </div>
            <input type="text" />
            <Button variant="warning">Send</Button>

        </div>
    );
}