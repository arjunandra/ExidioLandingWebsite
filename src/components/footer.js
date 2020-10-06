import React, { Component } from 'react'
import TwitterLogo from '../images/TwitterLogo.png'
import TelegramLogo from '../images/TelegramLogo.png'
import GithubLogo from '../images/GithubLogo.png'
import MediumLogo from '../images/MediumLogo.png'
import LinkedinLogo from '../images/LinkedinLogo.png'
import '../css/footer.css'

export default class FooterSection extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="FooterContainer">
                <div className="LeftFooter">
                    <div className="ExidioLogo" />
                    <div className="FooterContactSection">
                        <img src={TwitterLogo}></img>
                        <img src={TelegramLogo}></img>
                        <img src={GithubLogo}></img>
                        <img src={MediumLogo}></img>
                        <img src={LinkedinLogo}></img>
                    </div>
                    <p class="LeftFooterBase"> Exidio.co © 2020. All Rights Reserved. </p>
                </div>
                <div className="RightFooter">
                    <div className="FooterLinks">
                        <div className="FooterLinksBox">
                            <p className="FooterLinksHeading"> Products </p>
                            <p className="FooterLinksSubHeading"> Overveiw </p>
                            <p className="FooterLinksSubHeading FooterLowerLinks"> dVPN </p>
                        </div>
                        <div className="FooterLinksBox">
                            <p className="FooterLinksHeading"> Company </p>
                            <p className="FooterLinksSubHeading"> About Us </p>
                            <p className="FooterLinksSubHeading FooterLowerLinks"> Vision </p>
                        </div>
                        <div className="FooterLinksBox">
                            <p className="FooterLinksHeading"> Social </p>
                            <p className="FooterLinksSubHeading"> Blog </p>
                            <p className="FooterLinksSubHeading FooterLowerLinks"> Twitter </p>
                            <p className="FooterLinksSubHeading LinkedInLink"> LinkedIn </p>
                        </div>
                    </div>

                    <p className="RightFooterBase"> Privacy Policy </p>
                </div>
            </div>
        )
    }
}
