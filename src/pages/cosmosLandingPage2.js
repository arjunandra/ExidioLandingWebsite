import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home_NavBar from '../components/home_navbar'
import CosmosLandingImg1 from "../images/CosmosLandingImg1.png";
import CosmosLandingImg2 from "../images/CosmosLandingImg2.png";
import CosmosLandingImg3 from "../images/CosmosLandingImg3.png";
import CosmosLandingImg4 from "../images/CosmosLandingImg4.png";
import CosmosLandingImg5 from "../images/CosmosLandingImg5.png";
import '../css/cosmosLanding2.css';

export class CosmosLandingPage2 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="CosmosLandingPage2">
                    <p className="CosmosLandingPage2Heading"> Exidio’s aim is to provide blockchain based infrastructure and applications that have the ability to provide tangible utility, efficiency and security.  </p>
            </div>
        )
    }
}