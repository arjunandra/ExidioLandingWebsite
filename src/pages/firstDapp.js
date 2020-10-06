import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FirstDAPPBtn from '../images/FirstDAPPBtn.png'
import FirstDAPPPicture from '../images/FirstDAPPPicture.png'
import '../css/firstDapp.css'

export class FirstDAPP extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="FirstDAPPPage">
                <div className="ContentFirstDAPP">
                    <div className="TitleFirstDAPP">
                        <img src={FirstDAPPBtn}></img>
                        <p className="TitleFirstDAPPText"> First Dapp </p>
                    </div>
                    <p className="HeadingFirstDAPP"> Our first dApp, Sentinel dVPN, has seen huge user adoption. </p>
                    <p className="SubHeadingFirstDAPP"> 425+ TB of data transmitted </p>
                    <p className="SubHeadingFirstDAPP"> 1,000+ 5-star reviews on Google Play, average rating of 4.8 stars </p>
                    <p className="SubHeadingFirstDAPP"> With over 75,000 users across all plaforms, Exidio's flagship dVPN application has seen significant growth. </p>
                    <p className="SubHeadingFirstDAPP"> 5,000 average daily active sessions </p>
                </div>

                <div className="PictureFirstDAPP"> 
                    <img src={FirstDAPPPicture}></img>
                </div>
            </div>
        )
    }
}
