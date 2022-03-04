import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Col} from 'react-bootstrap'
import Navbar from './components/navbar/Navbar'
import SignIn from './components/signin/SignIn'
import LandingPage from './components/landingPage/LandingPage'
import { BrowserRouter,Link } from "react-router-dom";
import Add from './components/addMsq/Add'
import ChatbotInfo from './components/chatbotInfo/ChatbotInfo'
import Signup from './components/signup/SignUp'
import ChatWindow from './components/chat-window/ChatWindow'
import Dashboard from './components/dashboard/Dashboard'
import React from 'react'
import ReactDOM from 'react-dom'
import Inbox from './components/inbox/Inbox.js'
import Reset from "./components/resetPass/Reset.js"
import TestAuth from "../src/components/testAuth/TestAuth.js"
import ProtectedRoute from "../src/components/protectedRoute/ProtectedRoute.js"
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
    
  <div>
    
<Navbar />



{/* link between pages */}
        <Routes>
          <Route path="/mainpage" element={<LandingPage />}>
         
          </Route>
          <Route path="/inbox" element={<Inbox />}>
           
          </Route>
          <Route path="/signin" element ={<SignIn />} />
          
        
       <Route path="/add" element={<Add />}>
     
          </Route>
          <Route path="/chatbot" element={<ChatbotInfo />} />

       
          <Route path="/signup" element ={<Signup />}>

          </Route>
          <Route path="/chatbotwindow" element={<ChatWindow />}> 
       
          </Route>
          <Route path="/test" element={<TestAuth />} />  
       
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={false}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/reset" element={<Reset />} />
    
    
        </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
