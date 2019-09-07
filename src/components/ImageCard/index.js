import React from "react";
import "./index.scss";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  
  render() {
    const { href, text, src, alt } = this.props.item;
    return (
      <div className="card mr-md-3 ml-md-3 mr-sm-1 ml-sm-1 col-xs-12 rounded-0">
        <a href={href}>
          <div className="overlay-card-img-top hvr-bounce-to-top">
            <div className="text-card">{text}</div>
          </div>
          <img className="card-img-top" alt={alt} src={src} />
        </a>
      </div>
    );
  }
}
export default ImageCard;