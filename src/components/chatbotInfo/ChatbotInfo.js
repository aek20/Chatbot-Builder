import React from 'react'
import "./chatbotInfo.css";
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
export default function ChatbotInfo() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Chatbot Name</Form.Label>
                    <Form.Control  placeholder="Enter Chatbot Name" />
                    <Form.Text className="text-muted">
                      
                    </Form.Text>
                </Form.Group>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> Arabic</label><br/>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                            <label for="vehicle2"> English</label><br/>
                <Link to='./add'>  <Button variant="primary" type="submit">
                    Create
                </Button></Link>
            </Form>
        </div>
    )
}
