import React from 'react';
import '../landingPage/landingPage.css'

// import { Container, Nav, NavDropdown} from 'react-bootstrap'

const Navbar = () => {
    return (

        <header id="navbarstick">
            <nav className="container">
                <h1 className="logo1">CHATBOT BUILDERZ</h1>
                <ul className="primary-nav">
                    <li className="nav-item">
                        <a href="#">HOME</a>
                    </li>
                    <li className="nav-item ">
                        <a href="#">DASHBOARD</a>
                    </li>
                    <li className="nav-item ">
                        <a href="#">INBOX</a>
                    </li>
                    <li className="nav-item ">
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
                <ul className="login-nav">
                    <li className="nav-item">
                        <a href="#">Log In</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" class="main-btn">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </header>



    );
}



export default Navbar;
