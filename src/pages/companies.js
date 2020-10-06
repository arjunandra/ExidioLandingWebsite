import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SentinelFull from '../images/SentinelFull.png'
import BPSAALogo from '../images/BPSAALogo.png'
import PIVXLogo from '../images/PIVXLogo.png'
import KIRALogo from '../images/KIRALogo.png'
import SpiderLogo from '../images/SpiderLogo.png'
import SodioLogo from '../images/SodioLogo.png'
import AlphatechLogo from '../images/AlphatechLogo.png'
import '../css/companies.css'

export class CompaniesPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="CompaniesPage">
                <div className="TitleCompanies"> Companies and projects we work with </div>
                <div className="CompaniesGrid">
                    <div className="CompaniesPictureBox">
                        <img src={SentinelFull}></img>
                    </div>
                    <div className="CompaniesPictureBox">
                        <img src={BPSAALogo}></img>
                    </div>
                    <div className="CompaniesPictureBox">
                        <img src={PIVXLogo}></img>
                    </div>
                    <div className="CompaniesPictureBox">
                        <img src={KIRALogo}></img>
                    </div>
                    <div className="CompaniesPictureBox">
                        <img src={SpiderLogo}></img>
                    </div>
                    <div className="CompaniesPictureBox">
                        <img src={SodioLogo}></img>
                    </div>
                    <div className="CompaniesPictureBox">
                        <img src={AlphatechLogo}></img>
                    </div>
                </div>
            </div>
        )
    }
}