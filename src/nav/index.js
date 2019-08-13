import React from "react";
import "./index.scss";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  handleClick() {
    this.setState({value: 'squares'});
  }
  
  render() {
    const navBarList = this.props.navBarList;
    const logo = navBarList.logo;
    const navList = navBarList.navList;
    console.log(navList);
    const navMapList = navList.map((i, j) => {
      const classNameNavList = ( j === 0 ) ?
        "nav-item active" :
        "nav-item";
      console.log(typeof i);
      if(typeof i !== 'object') {
        return (
          <li className={classNameNavList}>
            <a className="nav-link" href="about.html">{i}</a>
          </li>
        );
      } else {
        return (
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {i.mainNavList}
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
              {i.subList.map((i, j) => {
                return (
                  <a className="dropdown-item" href="portfolio-1-col.html">{i}</a>
                )
              })}
            </div>
          </li>
        )
      }
    });
    return (
      <nav className="navbar fixed-top navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href={logo.logoHref}>
            {logo.logoImg && <img src={logo.logoSrc} alt={logo.logoAlt} />}
            {!logo.logoImg && logo.logoText}
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {navMapList}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;