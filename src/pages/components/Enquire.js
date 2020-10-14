
import React, { Component } from 'react';


import Vector from '../../assets/Vector.png'


class Enquire extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                  <section className="contact-us">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="row">
                            <div className="ContactUsPage">
                <h1 className="HeadingContactUs"> Inquire to build custom decentralized VPN </h1> 
                <div className="ContactUsBtnLarge">
                    <a href="https://share.hsforms.com/1jujVHqg6Snu8rNW_UKK0ZQ54w97" target="_blank" rel="noopener noreferrer">
                        <div class="ContactText"> Contact Us </div>
                        <img src={Vector} alt="vector"></img>
                    </a>
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

export default Enquire;


