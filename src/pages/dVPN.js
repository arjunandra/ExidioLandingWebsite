import React, { Component } from 'react';
import Enquire from '../pages/components/Enquire'
import DVPNHomePage from '../assets/DVPNHomePicture.png';
import LearnMoreBtn from "../assets/LearnMoreBtn.png";
import SentinelPicture from "../assets/SentinelPicture.png"
import EncryptedDataImg from "../assets/EncryptedDataImg.png";
import OpenSourceImg from "../assets/OpenSourceImg.png";
import NoLogsImg from "../assets/NoLogsImg.png";
import UniversalImg from "../assets/UniversalImg.png";
class dVPN extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="dvpn">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="row">
                                <div class="text-white home-div text-center col-lg-12 ">
                                    <h1 class="home-title">Create your own decentralized and distributed VPN network <span>with Exidio today!</span></h1>
                                </div>
                                <img className="dvpn-img" src={DVPNHomePage} alt="dvpn"></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sentinel-dvpn-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="ContentSentinel">
                                    <h1 className="HeadingSentinel"> Download and test Sentinel dVPN, Exidio's flagship dVPN mobile application </h1>
                                    <p className="SubHeadingSentinel"> Your browsing history and information cannot be stored. </p>
                                    <p className="SubHeadingSentinel"> Verify your connection is end-to-end encrypted. </p>
                                    <p className="SubHeadingSentinel"> Sentinel is not just a VPN, it's a 'decentralized' open-source provable VPN or a 'dVPN'. Learn more at www.sentinel.co </p>
                                    <p className="SubHeadingSentinel"> 'Sentinel Free VPN' is a decentralized VPN (dVPN) that has access to user hosted nodes from the Sentinel Network, currently developed on top of Ethereum (on mobile) & Tendermint and Cosmos Network (on desktop </p>
                                    <div className="DownloadsPageSentinel">Downloads Page
                        <img src={LearnMoreBtn} alt="learnmore"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="SentinelPicture col-lg-5">
                               
                                    <img src={SentinelPicture} alt="sentinel"></img>
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section className="industry-leading">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">

                                <h1 className="TitleTextDVPNFeatures"> Industry leading dVPN technology ensuring customer trust and satisfaction </h1>

                                <div className="col-sm-6 col-lg-3 FeatureDVPNFeatures">

                                    <img src={EncryptedDataImg} alt="Encrypted"></img>
                                    <p class="HeadingDVPNFeatures"> Encrypted Data </p>
                                    <p class="SubHeadingDVPNFeatures"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>
                                </div>

                                <div className="col-sm-6 col-lg-3 FeatureDVPNFeatures">

                                    <img src={OpenSourceImg} alt="OpenSource"></img>
                                    <p class="HeadingDVPNFeatures"> Open Source </p>
                                    <p class="SubHeadingDVPNFeatures"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>

                                </div>
                                <div className="col-sm-6 col-lg-3 FeatureDVPNFeatures">

                                    <img src={NoLogsImg} alt="NoLogs"></img>
                                    <p class="HeadingDVPNFeatures"> No Logs </p>
                                    <p class="SubHeadingDVPNFeatures"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>

                                </div>
                                <div className="col-sm-6 col-lg-3 FeatureDVPNFeatures">

                                    <img src={UniversalImg} alt="Universal"></img>
                                    <p class="HeadingDVPNFeatures feature4DVPNFeatures"> Universal Accessibility </p>
                                    <p class="SubHeadingDVPNFeatures"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>

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

export default dVPN;