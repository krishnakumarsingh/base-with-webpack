import React from "react";
import "./index.scss";
import ImageCard from '../ImageCard';
import ContactUs from '../ContactUs';
import Map from '../Map';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      mapStyles: {width:'100%',height: '25rem'},
      mapCenter: {lat: 12.925453, lng: 77.546761},
      mapApiKey: 'GOOGLE_API_KEY',
      mapZoom: 20,
    };
  }
  createMarkup(html) {
    return {__html: html};
  }
  render() {
    const { id, classItem, h2, h3, para, imageCard, imageCardAble, imgItemShow, map, childHtml, hrHide, childHtmlImg } = this.props.sectionData;
    const { mapApiKey, mapZoom, mapStyles, mapCenter } = this.state;
    var groupSize = imgItemShow;
    var ImageCardRow = imageCard.map(function(item, index) {
        return <ImageCard key={index} item={item} />;
      }).reduce(function(r, element, index) {
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
      }, []).map(function(rowContent, index) {
        return <div key={index} className={`card-group ${imageCard.length === 2 ? 'two-card': ''} col-sm-12`}>{rowContent}</div>;
    });
    return (
      <section id={id} className={`page-section ${classItem}`}>
        {(h2 !== "" || h3 !== "") && <div className="base-section base-section__container">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 w-100 header-sec">
                {h2 !== "" && <h2 className="KaushanScript h2-head-sec">
                  {h2}
                  <hr className="brdr" />
                </h2>}
                {h3 !== "" && <h3 className="Montserrat h3-head-sec">{h3}</h3>}
                {
                  para.map((item, index) => {
                    return (<p key={index} className="sec-para Roboto">{item}</p>)
                  })
                }
              </div>
            </div>
          </div>
        </div>}
        {imageCardAble && <div className="base-cards">
          <div className="container">
            <div className="row">{ImageCardRow}</div>
          </div>
        </div>}
        {map && <div className='map-section'>
          <Map
            apiKey={mapApiKey}
            zoom={mapZoom}
            mapStyles = {mapStyles}
            center={mapCenter}
            initialCenter={mapCenter}
          />
        </div>}
        {map && 
          <div className="base-contact">
            <ContactUs />
          </div>
        }
        {childHtmlImg && <div className='container-fluid'><div className='row'><img className='img-fluid' src={require(`../../assets/images/${childHtmlImg}`)} /></div></div>}
        {childHtml && <div className={''} dangerouslySetInnerHTML={this.createMarkup(childHtml)} />}
        {(hrHide === undefined || hrHide !== true) && <hr className="sec-btm" />}
      </section>
    );
  }
}
export default Section;