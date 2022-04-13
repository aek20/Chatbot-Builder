import React from "react";
import backgroundimege from '../../img/banner-bg.svg';
class Landinpage extends React.Component {
    render() {
        
        return (
            <>
        
    <div className="preloader">
        <div className="loader">
            <div className="ytp-spinner">
                <div className="ytp-spinner-container">
                    <div className="ytp-spinner-rotator">
                        <div className="ytp-spinner-left">
                            <div className="ytp-spinner-circle"></div>
                        </div>
                        <div className="ytp-spinner-right">
                            <div className="ytp-spinner-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    
    <div id="home" className="header-hero bg_cover"   style={{backgroundImage :'url(' + backgroundimege + ')'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="header-hero-content text-center">




                            <h1 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Chatbot
                                Builder</h1>
                            <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Builde a chatbot
                                on your own with out any programming skills</p>
                            <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">you don't have
                                any chatbot??</p>
                                
                            <a href="#" className="main-btn wow fadeInUp" data-wow-duration="1.3s"
                                data-wow-delay="1.1s">Create new chatbot</a>
                        </div> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s"
                            data-wow-delay="1.4s">
                            <img src="assets/images/main-removebg-preview.png" alt="hi botS"/> 
                        </div> 
                    </div>
                </div> 
            </div> 
            <div id="particles-1" className="particles"></div>
        </div> 
    


  


            </>



        );

    }

}
export default Landinpage;
