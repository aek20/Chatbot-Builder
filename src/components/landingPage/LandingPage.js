import React from "react";
import "./landingPage.css"
import background from '../../img/main-removebg-preview.png'
import play from "../../img/icons8-play-64.png"
class Landingpage2 extends React.Component {
    render() {

        return (
            <div className="landingpagebody">
                <main>
                    <div className="main-image">
                        <img src={background} />
                    </div>
                    <div className="main-content">
                        <h1> chatbot builder </h1>
                        <p>
                            With just a few clicks, you can build a chatbot that answers the most common questions without coding knowledge
                        </p>
                        <div className="main-buttons">
                            <a href="#" className=" main-button main-btn ">Get Started</a>
                            <div className="main-button secondary-button">
                                <img src={play} />Watch Video
                            </div>
                        </div>
                    </div>
                </main>

            </div>

        );

    }

}
export default Landingpage2;
