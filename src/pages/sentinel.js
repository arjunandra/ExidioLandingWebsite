import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LearnMoreBtn from "../images/LearnMoreBtn.png";
import SentinelPicture from "../images/SentinelPicture.png"
import '../css/sentinel.css'

export class SentinelPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="SentinelPage">
                <div className="ContentSentinel">
                    <p className="HeadingSentinel"> Download and test Sentinel dVPN, Exidio's flagship dVPN mobile application </p>
                    <p className="SubHeadingSentinel"> Your browsing history and information cannot be stored. </p>
                    <p className="SubHeadingSentinel"> Verify your connection is end-to-end encrypted. </p>
                    <p className="SubHeadingSentinel"> Sentinel is not just a VPN, it's a 'decentralized' open-source provable VPN or a 'dVPN'. Learn more at www.sentinel.co </p>
                    <p className="SubHeadingSentinel"> 'Sentinel Free VPN' is a decentralized VPN (dVPN) that has access to user hosted nodes from the Sentinel Network, currently developed on top of Ethereum (on mobile) & Tendermint and Cosmos Network (on desktop </p>
                    <div className="DownloadsPageSentinel">Downloads Page
                        <img src={LearnMoreBtn} ></img>
                    </div>
                </div>

                <div className="SentinelPicture"> 
                    <img src={SentinelPicture}></img>
                </div>
            </div>
        )
    }
}