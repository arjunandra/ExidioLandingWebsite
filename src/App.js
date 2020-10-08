import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from './pages/home'
import { HomeFeaturesPage } from './pages/homeFeatures'
import { DVPNHomePage } from './pages/dVPNHome'
import { CosmosPage } from './pages/cosmos'
import { FirstDAPP } from './pages/firstDapp';
import { BuildingDAPP } from './pages/buildingDapp'
import { SentinelPage } from './pages/sentinel'
import { DVPNFeaturesPage } from './pages/dVPNFeatures'
import { CompaniesPage } from './pages/companies'
import { ContactUsPage } from './pages/contactUs'
import { CosmosLandingPage } from './pages/cosmosLanding'
import { CosmosLandingPage2 } from './pages/cosmosLandingPage2'
import { CosmosLandingPage3 } from './pages/cosmosLandingPage3'
import FooterSection  from './components/footer'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route component={MainLandingPage} exact path="/"  />
      <Route component={DVPNLandingPage} exact path="/dVPN"  />
      <Route component={CosmosLandingFull} exact path="/Cosmos" />
    </div>
    </BrowserRouter>
  );
}

export default App;

export class MainLandingPage extends Component {
  constructor(props) {
      super(props)
      
  }

  render() {
    return (
      <div className="MainLandingPage">
        <HomePage />
        <HomeFeaturesPage />
        <CosmosPage />
        <FirstDAPP />
        <BuildingDAPP />
        <CompaniesPage />
        <ContactUsPage />
        <FooterSection />
      </div>
    );
  }
}

export class DVPNLandingPage extends Component {
  constructor(props) {
      super(props)
      
  }

  render() {
    return (
      <div className="DVPNLandingPage">
        <DVPNHomePage />
        <SentinelPage />
        <DVPNFeaturesPage />
        <ContactUsPage />
        <FooterSection />
      </div>
    );
  }
}

export class CosmosLandingFull extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div className="DVPNLandingPage">
        <CosmosLandingPage />
        <CosmosLandingPage2 />
        <CosmosLandingPage3 />
        <FooterSection />
    </div>
    )
  } 
}


