import React from "react";
import "./index.scss";
import { NavLink } from 'react-router-dom';
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  imgDiv(html, href, text, alt, src, exHref, target) {
    if(href) {
      return <NavLink
        exact
        to={href}
        className="link"
        id="formatics"
      >
        {text && <div className="overlay-card-img-top hvr-bounce-to-top">
          <div className="text-card">{text}</div>
        </div>}
        <img className="card-img-top" alt={alt} src={require(`../../assets/images/${src}`)} />
      </NavLink>;
    } else if(exHref) {
      return <a
        href={exHref}
        className="link"
        id="formatics"
        target={target && target}
      >
        {text && <div className="overlay-card-img-top hvr-bounce-to-top">
          <div className="text-card">{text}</div>
        </div>}
        <img className="card-img-top" alt={alt} src={require(`../../assets/images/${src}`)} />
      </a>;
    }
  }
  render() {
    const { href, text, src, alt, classItem, exHref, target } = this.props.item;
    return (
      <div className={`card mr-md-3 ml-md-3 mr-sm-1 ml-sm-1 col-xs-12 rounded-0 ${classItem}`}>
        {this.imgDiv('hello', href, text, alt, src, exHref, target)}
      </div>
    );
  }
}
export default ImageCard;