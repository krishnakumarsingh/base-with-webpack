import React from "react";
import "./index.scss";
import "popper.js";
import "bootstrap";
import Nav from "../nav";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarList: {
        "logged_in":true,
        'logo': {
            'logoText': 'Logo Text1',
            'logoSrc': 'Logo Src',
            'logoHref': 'Logo Href',
            'logoAlt': 'Logo Alt',
            'logoImg': false
          },
          'navList': [
            'List 1',
            'List 2',
            'List 3',
            {
              'mainNavList': 'Has Sub List 1',
              'subList': ['Sub List 1', 'Sub List 2']
            },
            {
              'mainNavList': 'Has Sub List 2',
              'subList': ['Sub List 3', 'Sub List 4']
            },
            'List 4',
            {
              'mainNavList': 'Has Sub List 3',
              'subList': ['Sub List 5', 'Sub List 6']
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
      <div className="container-fluid">
        <Nav navBarList={this.state.navBarList} />
        {/* </header> */}
        {/* <div class="container"> */}
        {/* <footer class="py-5 bg-dark"> */}
        {/* <button
          className="square"
          onClick={() => this.handleClick()}
        >
          {this.state.value}
        </button> */}
        {/* <Header /> */}
      </div>
    );
  }
}
export default App;