import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home_NavBar from '../components/home_navbar'
import '../css/aboutPage1.css'

export class AboutPage1 extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="AboutPage1">
                <Home_NavBar selected="About" />
                <p className="AboutPage1Heading"> Meet the team behind Exidio </p>
            </div>
        )
    }
}