import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./signin.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const state =false
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user){
      
            navigate("/dashboard")
      
    }

    }, [user, loading]);
    return (
        <div className="login">
            <div className="login__container">
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button className="login__btn login__google" onClick={()=>{
                    signInWithGoogle()
                       

   sessionStorage.setItem('Auth Token',"true" )
                            // response._tokenResponse.refreshToken

                     
                    }
                    }>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Login;
































// import React from 'react'
// import {Form,Button} from 'react-bootstrap'
// import { Link } from "react-router-dom";
// import './signin.css'
// export default function SignIn() {
//     return (
//         <div>
//             <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Link to="/signup">Create New Account</Link>
//                     {/* <Form.Check type="checkbox" label="Check me out" /> */}
//                 </Form.Group>
               
//                 <Link to="/mainpage"> <Button variant="primary" type="submit" >SUBMIT
//                 </Button></Link>
               

//             </Form>
         
//         </div>
//     )
// }
