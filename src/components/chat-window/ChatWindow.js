import React, { Component } from 'react'
import { Launcher } from 'react-chat-window'

class Demo extends Component {

    constructor() {
        super();
        this.state = {
            messageList: []
        };
    }
  
    _onMessageWasSent(message) {
        sendToServer(message);
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }

   

    _sendMessage(text) {
        if (text.length > 0) {
           
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
       
        }
    }

    render() {
        return (<div>
            <Launcher
                agentProfile={{
                    teamName: 'react-chat-window',
                    imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji
            />
        </div>)
    }
}
const sendToServer=(message)=> {
    console.log(message)
   
    fetch("http://localhost:3910/add/messages", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            data: message.data.text,
            author:message.author
            ,type:message.type




        })
    })
}
export default Demo