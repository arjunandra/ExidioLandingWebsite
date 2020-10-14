import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/ExidioLogo.png';
import hamberger from '../../assets/menu.svg'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    /**
     * Sets active tab
     */
    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }

    render() {

        return (
            <React.Fragment>
                <div id="is-sticky">
                    <nav className="navbar-custom sticky sticky-dark navbar navbar-expand-lg fixed-top" id="nav-bar">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                            <img src={logo} alt="logo" /></Link>
                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <img src={hamberger} alt="hamberger" />
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display : this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">   
                                    <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                    <li className="nav-item active"><Link className="nav-link" to="/dvpn">dVPN</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/cosmos">Cosmos</Link></li>
                                        {/* <li className="nav-item"><Link className="nav-link" to="/sentinel">Sentinel</Link></li> */}
                                        
                                        
                                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>        
                                    </ul>
                                <div className={this.state.isOpen ? "nav-button" : "nav-button ml-auto"}>
                                    <ul className="nav navbar-nav navbar-left">
                                        <li>
                                            <a href="https://share.hsforms.com/1jujVHqg6Snu8rNW_UKK0ZQ54w97" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Contact Us</button></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;


