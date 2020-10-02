import React, { Component } from 'react'
import '../css/home_navbar.css'

export default class Home_NavBar extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="HomeNavBar"> 
                <div className="ExidioLogo" />
                <NavCell title="dVPN" />
                <NavCell title="Cosmos" link="https://cosmos.network/" />
                <NavCell title="Sentinel" />
                <NavCell title="Team" />
                <div className="ContactUs">
                    <div>Contact Us</div>
                    <div className="ContactUsBtn"></div>
                </div>
            </div>
        )
    }
}

export class NavCell extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
        <div className="NavCell"><a href={this.props.link} target="_blank">{this.props.title}</a></div> 
        )
    }
}




