import React from "react";
import "./index.scss";
import Popper from 'popper.js';
//window.Popper = Popper;
import "bootstrap";
import Nav from "../nav";

//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Services from '../services';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarList: {
        "logged_in":true,
        'logo': {
            'logoText': 'Logo Text',
            'logoSrc': 'Logo Src',
            'logoHref': 'Logo Href',
            'logoAlt': 'Logo Alt',
            'logoImg': false
          },
          'navList': [
            {
              'navText': 'List 1',
              'navSrc': 'icon',
              'navHref': 'nav Href',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': false
            },
            {
              'navText': 'List 1',
              'navSrc': '',
              'navHref': 'nav Href',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': false
            },
            {
              'navText': 'List 1',
              'navSrc': '',
              'navHref': 'nav Href',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': false
            },
            {
              'navText': 'Has Sub List 1',
              'navSrc': '',
              'navHref': 'nav Href',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': true,
              'subList': [
                {
                  'navText': 'Sub List 1',
                  'navSrc': '',
                  'navHref': 'nav Href',
                  'navAlt': 'nav Alt',
                  'navClass': 'nav-list',
                  'navSub': false,
                }, {
                  'navText': 'Sub List 2',
                  'navSrc': '',
                  'navHref': 'nav Href',
                  'navAlt': 'nav Alt',
                  'navClass': 'nav-list',
                  'navSub': false,
                }
              ]
            },
            {
              'navText': 'Has Sub List 2',
              'navSrc': '',
              'navHref': 'nav Href',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': true,
              'subList': [
                {
                  'navText': 'Has Sub List 1',
                  'navSrc': '',
                  'navHref': 'nav Href',
                  'navAlt': 'nav Alt',
                  'navClass': 'nav-list',
                  'navSub': false,
                }
              ]
            },
            {

              'navText': 'List 4',
              'navSrc': '',
              'navHref': 'nav Href',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': false
            },
            {
              'navText': 'Has Sub List 3',
              'navSrc': '',
              'navHref': 'nav Href',
              'navAlt': 'nav Alt',
              'navClass': 'nav-list',
              'navSub': true,
              'subList': [
                {
                  'navText': 'Has Sub List 1',
                  'navSrc': '',
                  'navHref': 'nav Href',
                  'navAlt': 'nav Alt',
                  'navClass': 'nav-list',
                  'navSub': false,
                }
              ]
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
    return (
      <Router>
        <div>
          {/* <Nav navBarList={this.state.navBarList} navClassName="navbar-dropdown navbar-fixed-top" /> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/services'} className="nav-link">Services</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;