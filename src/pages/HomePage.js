import React, { Component } from 'react';
import Enquire from '../pages/components/Enquire'
import proudctBg from '../assets/HomeBackground.png';
import Exidio from '../assets/Exidio.mp4';
import ExidioFeatureLines from '../assets/ExidioFeatureLines.png';
import DistributedImg from '../assets/DistributedImg.png';
import HomeFeaturesHeader from '../assets/HomeFeaturesHeader.png';
import CustomImg from '../assets/CustomImg.png';
import CrossImg from '../assets/CrossImg.png';
import AffordableImg from '../assets/AffordableImg.png';
import CosmosLogo from "../assets/CosmosLogo.png";
import TendermintLogo from "../assets/TendermintLogo.png";
import SentinelLogo from "../assets/SentinelLogo.png";
import LearnMoreBtn from "../assets/LearnMoreBtn.png";
import BuildingDAPPBtn from '../assets/BuildingDAPPBtn.png';
import BuildingDAPPPicture from '../assets/BuildingDAPPPicture.png';
import FirstDAPPBtn from '../assets/FirstDAPPBtn.png';
import FirstDAPPPicture from '../assets/FirstDAPPPicture.png';
import SentinelFull from '../assets/SentinelFull.png';
import BPSAALogo from '../assets/BPSAALogo.png';
import PIVXLogo from '../assets/PIVXLogo.png';
import KIRALogo from '../assets/KIRALogo.png';
import SpiderLogo from '../assets/SpiderLogo.png';
import SodioLogo from '../assets/SodioLogo.png'
import AlphatechLogo from '../assets/AlphatechLogo.png';


class HomePage extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="section bg-home home-half" id="home" data-image-src={proudctBg}>
                    <div className="container">
                        <div className="row">
                            <div class="text-white home-div text-center col-lg-8 offset-lg-2">
                                <h1 class="home-title">Empowering secure access to <span>the Web 3.0</span></h1>
                                <p className="subtitle">Building decentralized and distributed networking solutions and contributing to the Cosmos open source community</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="second-section">
                    <div className="container">
                        <div className="row">
                            <div className="HomeFeaturesPage">
                                <h1 className="HomeFeaturesTitle"> Create a resilient and robust decentralized VPN with Exidio </h1>
                                <div className="video-section">
                                    <video loop autoPlay muted>
                                        <source src={Exidio} type="video/mp4" style={{ zIndex: -10 }} />
                                    </video>
                                    <img src={ExidioFeatureLines} alt="lines" className="HomeFeaturesLines" />
                                </div>
                                <div className="col-lg-12" style={{ zIndex: 5 }}>
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="col-lg-12 HomeFeaturesContentBox">
                                                <img src={HomeFeaturesHeader} alt="header"></img>
                                                <img src={DistributedImg} alt="Distributed" className="HomeFeaturesContentLogo"></img>
                                                <p className="HomeFeaturesHeading"> Distributed and Resilient Architecture </p>
                                                <p className="HomeFeaturesSubHeading"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="col-lg-12 HomeFeaturesContentBox">
                                                <img src={HomeFeaturesHeader} alt="header"></img>
                                                <img src={CustomImg} alt="icon" className="HomeFeaturesContentLogo"></img>
                                                <p className="HomeFeaturesHeading"> Custom Application Branding and UI </p>
                                                <p className="HomeFeaturesSubHeading"> In-house team to implement custom branding designs and corresponding UI layouts </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="col-lg-12 HomeFeaturesContentBox">
                                                <img src={HomeFeaturesHeader} alt="header"></img>
                                                <img src={CrossImg} alt="icon" className="HomeFeaturesContentLogo"></img>
                                                <p className="HomeFeaturesHeading"> Cross Platform Applications </p>
                                                <p className="HomeFeaturesSubHeading"> Availability on all major desktop and mobile operating systems to ensure that no user is left out  </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="col-lg-12 HomeFeaturesContentBox">
                                                <img src={HomeFeaturesHeader} alt="Feactures"></img>
                                                <img src={AffordableImg} alt="affordable" className="HomeFeaturesContentLogo"></img>
                                                <p className="HomeFeaturesHeading"> Affordable Pricing and Partnership </p>
                                                <p className="HomeFeaturesSubHeading"> Most competitive terms of engagement in the industry as well as a partnership program </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contribute-section">

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12">
                                <h1 className="TitleTextCosmos">Contribution to the Cosmos Ecosystem</h1>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="box1">
                                            <div className="LogoPortion">
                                                <img src={CosmosLogo} alt="logo" className="Logo"></img>
                                                <img src={TendermintLogo} alt="logo" className="Logo"></img>
                                            </div>
                                            <p className="Text1">Contribution efforts for the Cosmos ecosystem</p>
                                            <p className="Text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                            <div className="LearnMoreCosmos">Learn More
                            <img src={LearnMoreBtn} alt="learmore"></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="box2">
                                            <div className="LogoPortion">
                                                <img src={SentinelLogo} className="Logo" alt="logo"></img>
                                            </div>
                                            <p className="Text1">Contribution efforts for the Sentinel Hub</p>
                                            <p className="Text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                            <div className="LearnMoreCosmos">Learn More
                            <img src={LearnMoreBtn} alt="learmore"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="first-app">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-7">


                                        <div className="TitleFirstDAPP">
                                            <img src={FirstDAPPBtn} alt="dapp"></img>
                                            <p className="TitleFirstDAPPText"> First Dapp </p>
                                        </div>
                                        <p className="HeadingFirstDAPP"> Our first dApp, Sentinel dVPN, has seen huge user adoption. </p>
                                        <p className="SubHeadingFirstDAPP"> 425+ TB of data transmitted </p>
                                        <p className="SubHeadingFirstDAPP"> 1,000+ 5-star reviews on Google Play, average rating of 4.8 stars </p>
                                        <p className="SubHeadingFirstDAPP"> With over 75,000 users across all plaforms, Exidio's flagship dVPN application has seen significant growth. </p>
                                        <p className="SubHeadingFirstDAPP"> 5,000 average daily active sessions </p>


                                    </div>
                                    <div className="col-lg-5">
                                        <div className="PictureFirstDAPP" alt="dapp">
                                            <img src={FirstDAPPPicture} alt="firstapp"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="building-dapp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-7">

                                        <div className="TitleFirstDAPP">
                                            <img src={BuildingDAPPBtn} alt="dAPP"></img>
                                            <p className="TitleFirstDAPPText"> Building Dapp </p>
                                        </div>
                                        <h2 className="HeadingFirstDAPP"> Create groundbreaking dVPN applications crafted to your exact specifications with Exidio </h2>
                                        <p className="SubHeadingFirstDAPP"> Set up your own dVPN company </p>
                                        <p className="SubHeadingFirstDAPP"> Decentralize your existing VPN service </p>
                                        <p className="SubHeadingFirstDAPP"> Save time and cut costs eliminating node hosting and maintenance </p>
                                        <p className="SubHeadingFirstDAPP"> Open source code ensuring full user trust </p>

                                    </div>
                                    <div className="col-lg-5">
                                        <div className="PictureBuildingDAPP">
                                            <img src={BuildingDAPPPicture} alt="dAPP"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="CompaniesPage">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h1 className="TitleCompanies"> Companies and projects we work with </h1>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="row companies-row">
                                            <div className="CompaniesPictureBox">
                                                <img src={SentinelFull} alt="sentinel"></img>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                                <img src={BPSAALogo} alt="BPSAALogo"></img>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                                <img src={PIVXLogo} alt="PIVXLogo"></img>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                                <img src={KIRALogo} alt="KIRALogo"></img>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                                <img src={SpiderLogo} alt="SpiderLogo"></img>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                                <img src={SodioLogo} alt="SodioLogo"></img>
                                            </div>
                                            <div className="CompaniesPictureBox">
                                                <img src={AlphatechLogo} alt="AlphatechLogo"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
              <Enquire />
            </React.Fragment >
        );
    }
}

export default HomePage;