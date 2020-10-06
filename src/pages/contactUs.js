import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Vector from '../images/Vector.png'
import '../css/contactUs.css'

export class ContactUsPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="ContactUsPage">
                <div className="HeadingContactUs"> Inquire to build custom decentralized VPN </div> 
                <div className="ContactUsBtnLarge">
                    <div class="ContactText"> Contact Us </div>
                    <img src={Vector}></img>
                </div>
            </div>
        )
    }
}