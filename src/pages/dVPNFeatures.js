import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EncryptedDataImg from "../images/EncryptedDataImg.png";
import OpenSourceImg from "../images/OpenSourceImg.png";
import NoLogsImg from "../images/NoLogsImg.png";
import UniversalImg from "../images/UniversalImg.png";
import '../css/dVPNFeatures.css';

export class DVPNFeaturesPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="DVPNFeaturesPage">
                <div className="TitleTextDVPNFeatures"> Industry leading dVPN technology ensuring customer trust and satisfaction </div>
                <div className="FeatureBoxDVPNFeatures">
                <div className="FeatureDVPNFeatures">
                        <img src={EncryptedDataImg}></img>
                        <p class="HeadingDVPNFeatures"> Encrypted Data </p>
                        <p class="SubHeadingDVPNFeatures"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>
                    </div>
                    <div className="FeatureDVPNFeatures">
                        <img src={OpenSourceImg}></img>
                        <p class="HeadingDVPNFeatures"> Open Source </p>
                        <p class="SubHeadingDVPNFeatures"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>
                    </div>
                    <div className="FeatureDVPNFeatures">
                        <img src={NoLogsImg}></img>
                        <p class="HeadingDVPNFeatures"> No Logs </p>
                        <p class="SubHeadingDVPNFeatures"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>
                    </div>
                    <div className="FeatureDVPNFeatures">
                        <img src={UniversalImg}></img>
                        <p class="HeadingDVPNFeatures feature4DVPNFeatures"> Universal Accessibility </p>
                        <p class="SubHeadingDVPNFeatures"> Distributed blockchain based architecture without a single point of failure ensuring security and up-time </p>
                    </div>
                </div>
            </div>
        )
    }
}