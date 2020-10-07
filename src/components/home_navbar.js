import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/home_navbar.css'

export default class Home_NavBar extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        if (this.props.selected === "dVPN") {
            return (
                <div className="HomeNavBar"> 
                    <div className="ExidioLogo" />
                    <NavCell title="dVPN" selected="dVPN" />
                    <NavCell title="Cosmos" />
                    <NavCell title="Sentinel" />
                    <NavCell title="About" />
                    <div className="ContactUs">
                        <div>Contact Us</div>
                        <div className="ContactUsBtn"></div>
                    </div>
                </div>
            )
        }

        if (this.props.selected === "Cosmos") {
            return (
                <div className="HomeNavBar"> 
                    <div className="ExidioLogo" />
                    <NavCell title="dVPN" />
                    <NavCell title="Cosmos" selected="Cosmos" />
                    <NavCell title="Sentinel" />
                    <NavCell title="About" />
                    <div className="ContactUs">
                        <div>Contact Us</div>
                        <div className="ContactUsBtn"></div>
                    </div>
                </div>
            )
        }

        if (this.props.selected === "About") {
            return (
                <div className="HomeNavBar"> 
                    <div className="ExidioLogo" />
                    <NavCell title="dVPN" inverse />
                    <NavCell title="Cosmos" inverse />
                    <NavCell title="Sentinel"  inverse />
                    <NavCell title="About" selected="About" />
                    <div className="ContactUs ContactInverse">
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
                <NavCell title="About" />
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
        if (this.props.selected === "dVPN") {
            return (
                <div className="NavCell SelectedNavBarBtn"><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title}</a></div> 
                )
        }

        if (this.props.selected === "Cosmos") {
            return (
                <div className="NavCell SelectedNavBarBtn"><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title}</a></div> 
                )
        }

        if (this.props.selected === "About") {
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

        // Cosmos Cell
        if (this.props.title === "Cosmos") {
            return (
                <div className="NavCell"><Link to="/Cosmos">{this.props.title}</Link></div> 
            )
        }

        // About Cell
        if (this.props.title === "About") {
            return (
                <div className="NavCell"><Link to="/Cosmos">{this.props.title}</Link></div> 
            )
        }

        if (this.props.inverse) {
            return (
                <div className="NavCell NavInverse"><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title}</a></div> 
            )
        }

        return (
            <div className="NavCell"><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title}</a></div> 
        )
    }
}




