import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CosmosLogo from "../images/CosmosLogo.png";
import TendermintLogo from "../images/TendermintLogo.png";
import SentinelLogo from "../images/SentinelLogo.png";
import LearnMoreBtn from "../images/LearnMoreBtn.png";
import '../css/cosmos.css';

export class CosmosPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="CosmosPage">
                <p className="TitleTextCosmos">Contribution to <br />the Cosmos Ecosystem</p>
                <div class="ContentCosmos">
                    <div className="ContentBoxCosmos box1">
                        <div className="LogoPortion">
                            <img src={CosmosLogo} className="Logo"></img>
                            <img src={TendermintLogo} className="Logo"></img>
                        </div>
                        <p className="Text1">Contribution efforts for the Cosmos ecosystem</p>
                        <p className="Text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div className="LearnMoreCosmos">Learn More
                            <img src={LearnMoreBtn} ></img>
                        </div>
                    </div>

                    <div className="ContentBoxCosmos box2">
                        <div className="LogoPortion">
                            <img src={SentinelLogo} className="Logo"></img>
                        </div>
                        <p className="Text1">Contribution efforts for the Sentinel Hub</p>
                        <p className="Text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div className="LearnMoreCosmos">Learn More
                            <img src={LearnMoreBtn} ></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}