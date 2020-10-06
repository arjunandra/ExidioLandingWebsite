import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home_NavBar from '../components/home_navbar'
import '../css/home.css'

export class HomePage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="HomePage" >
                <Home_NavBar />
                <p className="MainContentHome">Empowering secure access to <span style={{color:"#5B47FF"}}>the Web 3.0</span></p>
                <p className="SubContentHome">Building decentralized and distributed networking solutions and contributing to the Cosmos open source community</p>
            </div>
        )
    }
}