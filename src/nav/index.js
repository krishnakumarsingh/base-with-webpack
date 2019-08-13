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
  componentDidMount () {
    console.log(window.Popper);
  }
  render() {
    const navBarList = this.props.navBarList;
    const logo = navBarList.logo;
    const navList = navBarList.navList;
    const navFixedClassName = "navbar ";
    const navClassName = "fixed-top navbar-expand-lg " + this.props.navClassName;
    const navMapList = navList.map((i, j) => {
      const classNameNavList = ( j === 0 ) ?
        "nav-item active" :
        "nav-item";
        console.log(i);
      if(!i.navSub) {
        return (
          <li key={j} className={classNameNavList}>
            <a className={"nav-link " + i.navClass} href={i.navHref}>
              {i.navSrc !== '' && <span className={i.navSrc}></span>}
              {i.navText}
            </a>
          </li>
        );
      } else {
        return (
          <li key={j} className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {i.navText}
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
              {i.subList && i.subList.length > 0 && i.subList.map((i1, j1) => {
                return (
                  <a key={j1} className="dropdown-item" href={i1.navHref}>
                    {i1.navText}
                  </a>
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
              {navMapList}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;