import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home_NavBar from '../components/home_navbar'
import CosmosLandingImg1 from "../images/CosmosLandingImg1.png";
import CosmosLandingImg2 from "../images/CosmosLandingImg2.png";
import CosmosLandingImg3 from "../images/CosmosLandingImg3.png";
import CosmosLandingImg4 from "../images/CosmosLandingImg4.png";
import CosmosLandingImg5 from "../images/CosmosLandingImg5.png";
import '../css/cosmosLanding.css';

export class CosmosLandingPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="CosmosLandingPage" >
                <Home_NavBar selected="Cosmos" />
                <div className="CosmosLandingPageLayout">
                    <div className="CosmosLandingPageContent">
                        <p className="CosmosLandingPageHeading"> Exidio strives to increase the overall utility and user adoption  <span style={{color:"#5B47FF"}}> in the Cosmos Ecosystem. </span></p>
                        <p className="CosmosLandingPageSubHeading"> Cosmos is a paradigm shifting network of blockchains that are built on the state of the art consensus mechanism, Tendermint. These blockchains will be able to communicate with each other and even non Tendermint based chains through the soon to be released IBC protocol (interblockchain communication) </p>
                        <div className="CosmosLandingPageLogos">
                            <div className="CosmosLandingPageLogoBox">
                                <img src={CosmosLandingImg1}></img>
                            </div>
                            <img src={CosmosLandingImg4}></img>
                            <div className="CosmosLandingPageLogoBox">
                                <img src={CosmosLandingImg2}></img>
                            </div>
                            <img src={CosmosLandingImg4}></img>
                            <div className="CosmosLandingPageLogoBox">
                                <img src={CosmosLandingImg3}></img>
                            </div>
                        </div>
                    </div>
                    <div className="CosmosLandingPageLogo">
                        <img src={CosmosLandingImg5}></img>
                    </div>
                </div>
            </div>
        )
    }
}