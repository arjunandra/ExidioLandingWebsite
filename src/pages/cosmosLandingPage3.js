import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home_NavBar from '../components/home_navbar'
import CosmosLanding3Img1 from "../images/CosmosLanding3Img1.png";
import CosmosLanding3Img2 from "../images/CosmosLanding3Img2.png";
import CosmosLanding3Img3 from "../images/CosmosLanding3Img3.png";
import '../css/cosmosLanding3.css';

export class CosmosLandingPage3 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="ComsosLandingPage3">
                <p className="CosmosLanding3Heading"> What Exidio is shipping for the Cosmos ecosystem? </p>
                <div className="CosmosLanding3Context">
                    <div className="CosmosLanding3ContextBox">
                        <img src={CosmosLanding3Img1}></img>
                        <p className="CosmosLanding3ContextHeading"> Cosmos Utilites </p>
                        <p className="CosmosLanding3ContextSubHeading"> Including Multi Sig, Including modules </p>
                    </div>
                    <div className="CosmosLanding3ContextBox">
                        <img src={CosmosLanding3Img2}></img>
                        <p className="CosmosLanding3ContextHeading"> Cosmos Applications </p>
                        <p className="CosmosLanding3ContextSubHeading"> Sentinel dVPN application </p>
                    </div>
                    <div className="CosmosLanding3ContextBox">
                        <img src={CosmosLanding3Img3}></img>
                        <p className="CosmosLanding3ContextHeading"> Cosmos Core </p>
                        <p className="CosmosLanding3ContextSubHeading"> Upcoming proposal to contribute to Cosmos/Tendermint core, <br /> Consistent testing and bug reporting </p>
                    </div>
                </div>
            </div>
        )
    }
}
