import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase/firebase.js";
import "./signup.css";
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate('/mainpage');
    }, [user, loading]);
    return (
        <div className="register">
            <div className="register__container">
                <input
                    type="text"
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                <button
                    className="register__btn register__google"
                    onClick={signInWithGoogle}
                >
                    Register with Google
                </button>
                <div>
                    Already have an account? <Link to="/">Login</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Register;






























// import React from 'react'
// import { Form, Button } from 'react-bootstrap'
// import { Link } from "react-router-dom";
// import './signup.css'
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
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control type="password" placeholder="" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
         
//                     {/* <Form.Check type="checkbox" label="Check me out" /> */}
//                 </Form.Group>

//                 <Link to="/mainpage"> <Button variant="primary" type="submit" >Create
//                 </Button></Link>


//             </Form>

//         </div>
//     )
// }
