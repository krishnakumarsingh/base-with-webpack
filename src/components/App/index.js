import React, { Component } from 'react';

/* import PostForm from '../PostForm'; */
import { Provider } from 'react-redux';
import "./index.scss";
import Popper from 'popper.js';
//window.Popper = Popper;
//import "bootstrap";
import dataJson from '../../actions/data.json'
import Nav from "../nav";
import { BrowserRouter as Router, Switch, Route, NavLink, Link, browserHistory } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Services from '../services';

import GetBuyingCenterInsight from '../pages/GetBuyingCenterInsight';
import ManagedMarketingDatabase from '../pages/ManagedMarketingDatabase';
import CompetitiveIntelligence from '../pages/CompetitiveIntelligence';
import DigitalMarketing from '../pages/DigitalMarketing';
import DatabaseManagement from '../pages/DatabaseManagement';
import WebsiteDevelopment from '../pages/WebsiteDevelopment';
import Spin from '../Spin';
import PrivacyPolicyTemplate from '../pages/PrivacyPolicyTemplate';
import { Login, Logout, Admin } from '../Login';
import Root from '../root';

class App extends Component {
  constructor(props) {
    super(props);
    const {
      navBarList,
      homeContent,
      aboutContent,
      headerContent,
      competitiveIntelligence,
      getBuyingCenterInsight,
      managedMarketingDatabase,
      digitalMarketing,
      databaseManagement,
      websiteDevelopment,
    } = dataJson;
    this.state = {
      navBarList: navBarList,
      homeContent: homeContent,
      aboutContent: aboutContent,
      headerContent: headerContent,
      competitiveIntelligence: competitiveIntelligence,
      getBuyingCenterInsight: getBuyingCenterInsight,
      managedMarketingDatabase: managedMarketingDatabase,
      digitalMarketing: digitalMarketing,
      databaseManagement: databaseManagement,
      websiteDevelopment: websiteDevelopment,
    };
    this.requireAuth = this.requireAuth.bind(this);
  }
  requireAuth() {
    alert('Admin');
  }
  componentDidMount() {
    $('#spin').hide();
  }
  render() {
    const {
      navBarList,
      homeContent,
      aboutContent,
      headerContent,
      competitiveIntelligence,
      getBuyingCenterInsight,
      managedMarketingDatabase,
      digitalMarketing,
      databaseManagement,
      websiteDevelopment
    } = this.state;
    return (
      <div className="App">
        <Router /* history={browserHistory} */>
          <Nav navBarList={navBarList} navClassName="navbar-dropdown navbar-fixed-top" />
          <Route
            exact
            path="/"
            //component={Home}
            render={(routeProps) => (
              <Home
                homeContent={homeContent}
                headerContent={headerContent}
              />
            )} />
          <Route
            path="/about"
            //component={About}
            render={(routeProps) => (
              <About
                aboutContent={aboutContent}
              />
            )}
          />
          <Route
            path="/getBuyingCenterInsight"
            //component={GetBuyingCenterInsight}
            render={(routeProps) => (
              <GetBuyingCenterInsight
                getBuyingCenterInsight={getBuyingCenterInsight}
              />
            )}
          />
          <Route
            path="/managedMarketingDatabase"
            //component={ManagedMarketingDatabase}
            render={(routeProps) => (
              <ManagedMarketingDatabase
                managedMarketingDatabase={managedMarketingDatabase}
              />
            )}
          />
          <Route
            path="/competitiveIntelligence"
            //component={CompetitiveIntelligence}
            render={(routeProps) => (
              <CompetitiveIntelligence
                competitiveIntelligence={competitiveIntelligence}
              />
            )}
          />
          <Route
            path="/digitalMarketing"
            //component={DigitalMarketing}
            render={(routeProps) => (
              <DigitalMarketing
                digitalMarketing={digitalMarketing}
              />
            )}
          />
          <Route
            path="/databaseManagement"
            //component={DatabaseManagement}
            render={(routeProps) => (
              <DatabaseManagement
                databaseManagement={databaseManagement}
              />
            )}
          />
          <Route
            path="/websiteDevelopment"
            //component={WebsiteDevelopment}
            render={(routeProps) => (
              <WebsiteDevelopment
                websiteDevelopment={websiteDevelopment}
              />
            )}
          />
          <Route path="/services" component={Services} />
          <Route path="/topics" component={Root} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} onEnter={this.requireAuth} />
          <Route path="/logout" component={Logout} />
          <Route path="/privacyPolicyTemplate" component={PrivacyPolicyTemplate} />
        </Router>
        {/* <ContactUs /> */}
      </div>
    );
  }
}

export default App;