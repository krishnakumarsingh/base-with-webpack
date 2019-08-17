import React from "react";
import "./index.scss";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    const { homeContent } = this.props;
    console.log(homeContent);
    
    /* const sliderList = homeContent.header.map((i, j) => {

    }); */
    const sliderList = homeContent.header.map((i, j) => {
      const sty = {
        backgroundImage: `url('${i.sliderSrc}')`
      };
      return (
        <div key={j} className={`carousel-item ${j === 0 ? 'active' : ''}`} style={sty}>
          <div className="carousel-caption d-none d-md-block">
            <h3>{`${i.sliderTitle}`}</h3>
            <p>{`${i.sliderText}`}</p>
          </div>
        </div>
      );
    });
    return (
      <header>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {homeContent.header.map((i, j) => {
              return (<li key={j} data-target="#carouselExampleIndicators" data-slide-to={`${j}`} className={`${j === 0 ? 'active' : ''}`}></li>);
            })}
          </ol>
          <div className="carousel-inner" role="listbox">
            {sliderList}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
    );
  }
}
export default Header;