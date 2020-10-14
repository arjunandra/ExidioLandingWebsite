import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router  } from 'react-router-dom';
import './css/style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/components/Header'
import Footer from './pages/components/Footer'
const homePage = React.lazy(() => import('./pages/HomePage'));
const dVPN = React.lazy(() => import('./pages/dVPN'));
const cosmos = React.lazy(() => import('./pages/Cosmos'));
const sentinel = React.lazy(() => import('./pages/Sentinel'));
const about = React.lazy(() => import('./pages/About'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpen: false
    }
    this.openModal = this.openModal.bind(this)
}
openModal () {
    this.setState({isOpen: true})
  }

componentDidMount()
{
  document.body.classList = "";
  document.getElementById('nav-bar').classList.add('navbar-white');
}
  render() {

    return (
      <React.Fragment>
        <Router>
        <Header />
        <React.Suspense fallback={<div>&nbsp;</div>}>
          <Switch>
              <Route exact path="/" component={homePage} /> 
              <Route path="/dvpn" component={dVPN} /> 
              <Route path="/about" component={about} /> 
              <Route path="/sentinel" component={sentinel} /> 
              <Route path="/cosmos" component={cosmos} /> 
           </Switch>
           </React.Suspense>
           <Footer />
        </Router>        
      </React.Fragment>
    );
  }
}



export default App;



