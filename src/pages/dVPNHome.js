import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home_NavBar from '../components/home_navbar'
import DVPNHomePicture from '../images/DVPNHomePicture.png'
import '../css/dVPNHome.css';

export class DVPNHomePage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="DVPNHomePage">
                <Home_NavBar selected="dVPN" />
                <p className="MainContentDVPNHome"> Create your own decentralized and distributed VPN network  <span style={{color:"#5B47FF"}}>with Exidio today!</span></p>
                <img src={DVPNHomePage}></img>
            </div>
        )
    }
}