import React, { Component } from 'react';
import CosmosLandingImg1 from "../assets/CosmosLandingImg1.png";
import CosmosLandingImg2 from "../assets/CosmosLandingImg2.png";
import CosmosLandingImg3 from "../assets/CosmosLandingImg3.png";
import CosmosLandingImg4 from "../assets/CosmosLandingImg4.png";
import CosmosLandingImg5 from "../assets/CosmosLandingImg5.png";
import CosmosLanding3Img1 from "../assets/CosmosLanding3Img1.png";
import CosmosLanding3Img2 from "../assets/CosmosLanding3Img2.png";
import CosmosLanding3Img3 from "../assets/CosmosLanding3Img3.png";

class Cosmos extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="cosmos-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="CosmosLandingPageContent">
                                            <h1 className="CosmosLandingPageHeading"> Exidio strives to increase the overall utility and user adoption  <span style={{ color: "#5B47FF" }}> in the Cosmos Ecosystem. </span></h1>
                                            <p className="CosmosLandingPageSubHeading"> Cosmos is a paradigm shifting network of blockchains that are built on the state of the art consensus mechanism, Tendermint. These blockchains will be able to communicate with each other and even non Tendermint based chains through the soon to be released IBC protocol (interblockchain communication) </p>
                                            <div className="CosmosLandingPageLogos">
                                                <div className="CosmosLandingPageLogoBox">
                                                    <img src={CosmosLandingImg1} alt="Cosmos"></img>
                                                </div>
                                                <img src={CosmosLandingImg4} alt="line"></img>
                                                <div className="CosmosLandingPageLogoBox">
                                                    <img src={CosmosLandingImg2} alt="Tendermint"></img>
                                                </div>
                                                <img src={CosmosLandingImg4} alt="line"></img>
                                                <div className="CosmosLandingPageLogoBox">
                                                    <img src={CosmosLandingImg3} alt="Sentinel"></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="CosmosLandingPageLogo">
                                            <img src={CosmosLandingImg5} alt="Ecosystem"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="cosmos-second-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="CosmosLandingPage2">
                                    <p className="CosmosLandingPage2Heading"> Exidio’s aim is to provide blockchain based infrastructure and applications that have the ability to provide tangible utility, efficiency and security.  </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="cosmos-ecosystem">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="CosmosLanding3Heading"> What Exidio is shipping for the Cosmos ecosystem? </h1>
                                <div className="row">
                                    <div className="col-lg-4 CosmosLanding3ContextBox">

                                        <img src={CosmosLanding3Img1} alt="Cosmos"></img>
                                        <p className="CosmosLanding3ContextHeading"> Cosmos Utilites </p>
                                        <p className="CosmosLanding3ContextSubHeading"> Including Multi Sig, Including modules </p>

                                    </div>
                                    <div className="col-lg-4 CosmosLanding3ContextBox">

                                        <img src={CosmosLanding3Img2} alt="Cosmos"></img>
                                        <p className="CosmosLanding3ContextHeading"> Cosmos Applications </p>
                                        <p className="CosmosLanding3ContextSubHeading"> Sentinel dVPN application </p>

                                    </div>
                                    <div className="col-lg-4 CosmosLanding3ContextBox">

                                        <img src={CosmosLanding3Img3} alt="Cosmos"></img>
                                        <p className="CosmosLanding3ContextHeading"> Cosmos Core </p>
                                        <p className="CosmosLanding3ContextSubHeading"> Upcoming proposal to contribute to Cosmos/Tendermint core, <br /> Consistent testing and bug reporting </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Cosmos;