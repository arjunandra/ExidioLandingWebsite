
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/ExidioLogo.png';
import TwitterLogo from '../../assets/TwitterLogo.png';
import TelegramLogo from '../../assets/TelegramLogo.png';
import GithubLogo from '../../assets/GithubLogo.png';
import MediumLogo from '../../assets/MediumLogo.png';
import LinkedinLogo from '../../assets/LinkedinLogo.png';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 margin-t-20">
                            <img className="foot-logo" src={logo} alt="logo" />
                                <div className="text-muted margin-t-20">
                                <ul className="list-inline social m-0">
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"> <img src={TwitterLogo} alt="twitter"></img></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><img src={TelegramLogo} alt="telegram"></img></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><img src={GithubLogo} alt="github"></img></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><img src={MediumLogo} alt="medium"></img></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"> <img src={LinkedinLogo} alt="linkedin"></img></Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-lg-2 offset-lg-2 margin-t-20">
                                <h4>Products</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Overview</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">dVPN</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Jobs</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="#">Bookmarks</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <div className="col-lg-2 margin-t-20">
                                <h4>Company</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">About Us</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">Vision</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <div className="col-lg-2 margin-t-20">
                                <h4>Social</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">Blog</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">Twitter</Link></li>
                                        <li><Link onClick={evt => {  evt.preventDefault(); } } to="">LinkedIn</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </footer>
                <div className="footer-alt">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="float-left pull-none">
                                    <p className="copy-rights text-muted mb-3 mb-sm-0"> Exidio.co © {new Date().getFullYear()}. All Rights Reserved</p>
                                </div>
                                <div className="float-right pull-none ">
                                    <ul className="list-inline social m-0">
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><i className="mdi mdi-facebook"></i></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><i className="mdi mdi-twitter"></i></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><i className="mdi mdi-linkedin"></i></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><i className="mdi mdi-google-plus"></i></Link></li>
                                        <li className="list-inline-item"><Link to="" onClick={evt => {  evt.preventDefault(); } } className="social-icon"><i className="mdi mdi-dribbble"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Footer;


