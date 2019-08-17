import React from "react";
import "./index.scss";
import { NavLink } from 'react-router-dom';
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
  componentDidMount () {
    //console.log(window.Popper);
  }
  render() {
    const navBarList = this.props.navBarList;
    const logo = navBarList.logo;
    const navList = navBarList.navList;
    const navFixedClassName = "navbar ";
    const navClassName = "fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top " + this.props.navClassName;
    const navMapList = navList.map((i, j) => {
      const classNameNavList = ( j === 0 ) ?
        "nav-item " :
        "nav-item";
        //console.log(i);
      if(!i.navSub) {
        return (
          <li key={j} className={classNameNavList}>
            <NavLink
              exact
              activeClassName="active"
              className={"nav-link " + i.navClass}
              to={i.navHref}
            >
              {i.navSrc !== '' && <span className={i.navSrc}></span>}
              {i.navText}
            </NavLink>
          </li>
        );
      } else {
        return (
          <li key={j} className="nav-item dropdown">
            <NavLink
              exact
              activeClassName="active"
              exact
              to={'#'}
              className="nav-link dropdown-toggle"
              id="navbarDropdownPortfolio"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {i.navText}
            </NavLink>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
              {i.subList && i.subList.length > 0 && i.subList.map((i1, j1) => {
                return (
                  <NavLink
                    exact
                    activeClassName="active"
                    exact
                    key={j1}
                    className="dropdown-item"
                    to={i1.navHref}
                  >
                    {i1.navText}
                  </NavLink>
                )
              })}
            </div>
          </li>
        )
      }
    });
    return (
      <nav kye={'navbar'} className={navFixedClassName + navClassName}>
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
              <li
                className={"nav-item"}
              >
                <NavLink 
                  className="nav-link nav-list"
                  exact
                  activeClassName="active"
                  to="/topics"
                >
                  Topics
                </NavLink>
              </li>
              {navMapList}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;