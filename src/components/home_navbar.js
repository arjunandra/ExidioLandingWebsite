import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/home_navbar.css'

export default class Home_NavBar extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        if (this.props.selectedDVPN) {
            return (
                <div className="HomeNavBar"> 
                    <div className="ExidioLogo" />
                    <NavCell title="dVPN" selectedDVPN="dVPN" />
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
        if (this.props.selectedDVPN === "dVPN") {
            return (
                <div className="NavCell SelectedNavBarBtn"><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title}</a></div> 
                )
        }

        // dVPN Cell
        if (this.props.title === "dVPN") {
            return (
                <div className="NavCell"><Link to="/dVPN">{this.props.title}</Link></div> 
            )
        }
        return (
        <div className="NavCell"><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title}</a></div> 
        )
    }
}




