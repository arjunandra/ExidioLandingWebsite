import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../css/cosmos.css'

export class CosmosPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="CosmosPage">
                <p className="TitleText">Contribution to <br />the Cosmos Ecosystem</p>
            </div>
        )
    }
}