import React from "react";
import "./navbar2.css"
class Navibar extends React.Component{
    
    render(){
        return(
              <>
              
    <header className="header-area">
        <div className="navbar-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">

                           
                            <a className="navbar-brand" href="index.html">
                            </a>
                          
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="page-scroll" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#features">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#facts">Why</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#team">Team</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#blog">Blog</a>
                                    </li>
                                </ul>
                            </div> 
                            

                                        <div className="navbar-btn d-none d-sm-inline-block">
                                            <a className="main-btn" data-scroll-nav="0" href="#">Sgin up</a>
                            </div>
                        </nav> 
                    </div>
                </div> 
            </div> 
        </div> 
        </header>
        
            </> 
        );


            
         
        
    }


    

}

export default Navibar