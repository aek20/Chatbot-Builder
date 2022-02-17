import React from 'react';
// import { Container, Nav, NavDropdown} from 'react-bootstrap'
import './navbar.css'
import { logout} from '../../firebase/firebase.js';
const Navbar = () => {
    return (
        <div>

            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="/mainpage" onClick={() =>logout()}> signout </a>
            </div>
        </div>
    );
}

export default Navbar;
