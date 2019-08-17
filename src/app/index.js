import React from "react";
import "./index.scss";
import Popper from 'popper.js';
//window.Popper = Popper;
import "bootstrap";
import Nav from "../nav";
import { BrowserRouter as Router, Switch, Route, NavLink, Link, browserHistory } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Services from '../services';
import Root from '../root';
import logoSrc from '../../images/2formatics-h.png';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarList: {
        "logged_in":true,
        'logo': {
            'logoText': 'Logo Text',
            'logoSrc': logoSrc,
            'logoHref': 'Logo Href',
            'logoAlt': 'Logo Alt',
            'logoImg': false
          },
          'navList': [
            {
              'navText': 'Home',
              'navSrc': 'icon',
              'navHref': '/',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': false
            },
            {
              'navText': 'Services',
              'navSrc': '',
              'navHref': '/services',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': false
            },
            {
              'navText': 'About',
              'navSrc': '',
              'navHref': '/about',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': false
            },
            {
              'navText': 'Topics',
              'navSrc': '',
              'navHref': 'nav Href',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': true,
              'subList': [
                {
                  'navText': 'Components',
                  'navSrc': '',
                  'navHref': '/topics/components',
                  'navAlt': 'nav Alt',
                  'navClass': 'nav-list',
                  'navSub': false,
                }, {
                  'navText': 'Props v. State',
                  'navSrc': '',
                  'navHref': '/topics/props-v-state',
                  'navAlt': 'nav Alt',
                  'navClass': 'nav-list',
                  'navSub': false,
                }
              ]
            }
          ]
      },
      homeContent: {
        "logged_in":true,
        "header": [
          {
            'sliderTitle': 'First Slid',
            'sliderText': 'This is a description for the first slide.',
            'sliderSrc': 'http://placehold.it/1400x464'
          }, 
          {
            'sliderTitle': 'Second Slid',
            'sliderText': 'This is a description for the Second slide.',
            'sliderSrc': 'http://placehold.it/2100x464'
          }, 
          {
            'sliderTitle': 'Third Slid',
            'sliderText': 'This is a description for the Third slide.',
            'sliderSrc': 'http://placehold.it/1900x464'
          }
        ]
      },
      value: null,
    };
  }

  handleClick() {
    this.setState({value: 'squares'});
  }
  render() {
    const { navBarList, homeContent } = this.state;
    return (
      <Router history={browserHistory}>
        <Nav navBarList={navBarList} navClassName="navbar-dropdown navbar-fixed-top" />
        <Route
          exact
          path="/"
          //component={Home}
          render={(routeProps) => (
            <Home
              homeContent={homeContent}
            />
          )} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/topics" component={Root} />
    </Router>
    );
  }
}
export default App;