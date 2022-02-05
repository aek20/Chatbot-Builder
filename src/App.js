
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Col} from 'react-bootstrap'
import Navbar from './components/navbar/Navbar'
import SignIn from './components/signin/SignIn'
import LandingPage from './components/landingPage/LandingPage'
import { BrowserRouter,Switch,Route,Link } from "react-router-dom";
import Add from './components/addMsq/Add'
import ChatbotInfo from './components/chatbotInfo/ChatbotInfo'
import Signup from './components/signup/SignUp'
import ChatWindow from './components/chat-window/ChatWindow'
import Dashboard from './components/dashboard/Dashboard'
import React from 'react'
import ReactDOM from 'react-dom'
import Inbox from './components/inbox/Inbox.js'

function App() {
  return (
    <BrowserRouter basename="/">
    
  <div>
    
<Navbar />



{/* link between pages */}
        <Switch>
          <Route path="/mainpage">
            <LandingPage />
          </Route>
          <Route path="/inbox">
            <Inbox />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        
          <Route path="/add">
        <Add />
          </Route>
          <Route path="/chatbot">
            <ChatbotInfo />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/chatbotwindow">
            <ChatWindow />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
    
        </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
