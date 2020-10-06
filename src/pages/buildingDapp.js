import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BuildingDAPPBtn from '../images/BuildingDAPPBtn.png'
import BuildingDAPPPicture from '../images/BuildingDAPPPicture.png'
import '../css/buildingDapp.css'

export class BuildingDAPP extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="FirstDAPPPage">
                <div className="ContentBuildingDAPP">
                    <div className="TitleFirstDAPP">
                        <img src={BuildingDAPPBtn}></img>
                        <p className="TitleFirstDAPPText"> Building Dapp </p>
                    </div>
                    <p className="HeadingFirstDAPP"> Create groundbreaking dVPN applications crafted to your exact specifications with Exidio </p>
                    <p className="SubHeadingFirstDAPP"> Set up your own dVPN company </p>
                    <p className="SubHeadingFirstDAPP"> Decentralize your existing VPN service </p>
                    <p className="SubHeadingFirstDAPP"> Save time and cut costs eliminating node hosting and maintenance </p>
                    <p className="SubHeadingFirstDAPP"> Open source code ensuring full user trust </p>
                </div>

                <div className="PictureBuildingDAPP"> 
                    <img src={BuildingDAPPPicture}></img>
                </div>
            </div>
        )
    }
}