import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Exidio from '../images/Exidio.mp4'
import ExidioFeatureLines from '../images/ExidioFeatureLines.png'
import DistributedImg from '../images/DistributedImg.png'
import HomeFeaturesHeader from '../images/HomeFeaturesHeader.png'
import CustomImg from '../images/CustomImg.png'
import CrossImg from '../images/CrossImg.png'
import AffordableImg from '../images/AffordableImg.png'
import '../css/homeFeatures.css'

export class HomeFeaturesPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="HomeFeaturesPage">
                <p className="HomeFeaturesTitle"> Create a resilient and robust decentralized VPN with Exidio </p>
                <video loop autoPlay muted>
                    <source src={Exidio} type="video/mp4" style={{zIndex:-10}}/>
                </video>
                <img src={ExidioFeatureLines} className="HomeFeaturesLines" />
                <div className="HomeFeaturesContent" style={{zIndex:5}}>
                    <div className="HomeFeaturesContentBox">
                        <img src={HomeFeaturesHeader}></img>
                        <img src={DistributedImg} className="HomeFeaturesContentLogo"></img>
                        <p className="HomeFeaturesHeading"> Distributed and Resilient Architecture </p>
                        <p className="HomeFeaturesSubHeading"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>
                    </div>
                    <div className="HomeFeaturesContentBox">
                        <img src={HomeFeaturesHeader}></img>
                        <img src={CustomImg} className="HomeFeaturesContentLogo"></img>
                        <p className="HomeFeaturesHeading"> Custom Application Branding and UI </p>
                        <p className="HomeFeaturesSubHeading"> In-house team to implement custom branding designs and corresponding UI layouts </p>
                    </div>
                    <div className="HomeFeaturesContentBox">
                        <img src={HomeFeaturesHeader}></img>
                        <img src={CrossImg} className="HomeFeaturesContentLogo"></img>
                        <p className="HomeFeaturesHeading"> Cross Platform Applications </p>
                        <p className="HomeFeaturesSubHeading"> Availability on all major desktop and mobile operating systems to ensure that no user is left out  </p>
                    </div>
                    <div className="HomeFeaturesContentBox">
                        <img src={HomeFeaturesHeader}></img>
                        <img src={AffordableImg} className="HomeFeaturesContentLogo"></img>
                        <p className="HomeFeaturesHeading"> Affordable Pricing and Partnership </p>
                        <p className="HomeFeaturesSubHeading"> Most competitive terms of engagement in the industry as well as a partnership program </p>
                    </div>
                </div>
            </div>
        )
    }
}