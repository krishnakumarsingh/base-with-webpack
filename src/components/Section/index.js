import React from "react";
import "./index.scss";
import ImageCard from '../ImageCard';
import Map from '../Map';
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  
  render() {
    const { id, classItem, h2, h3, para, imageCard, imageCardAble, imgItemShow, map } = this.props.sectionData;
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
        <div className="base-section base-section__container">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 w-100 header-sec">
                <h2 className="KaushanScript h2-head-sec">
                  {h2}
                  <hr className="brdr" />
                </h2>
                {h3 !== "" &&<h3 className="Montserrat h3-head-sec">{h3}</h3>}
                {
                  para.map((item, index) => {
                    return (<p key={index} className="sec-para Roboto">{item}</p>)
                  })
                }
              </div>
            </div>
          </div>
        </div>
        {imageCardAble && <div className="base-cards">
          <div className="container">
            <div className="row">{ImageCardRow}</div>
          </div>
        </div>}
        {map && <div className='map-section'>
          <Map apiKey='AIzaSyCWKVVUsYmQQCVE5QR3wxcv8u6L5slJroI' />
        </div>}
        {map && 
          <div className="base-contact">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 header-sec mbr-footer-content">
                  <p><strong className="Roboto">2FORMATICS SOLUTIONS PRIVATE LIMITED</strong></p>
                </div>		
                <div className="col-sm-8" data-form-type="formoid">
                  <div data-form-alert="true" id="message-show"></div>
                  <form action="" method="post" data-form-title="CONTACT FORM">
                    <input type="hidden" value="" data-form-email="true" className="hidden animated" />
                    <div className="row row-sm-offset">
                      <div className="col-xs-12 col-md-4">
                        <div className="form-group">
                          <label className="form-control-label text-white" htmlFor="form1-2h-name">Name<span className="form-asterisk">*</span></label>
                          <input type="text-card" className="form-control" name="name"  required="required" data-form-field="Name" id="form1-2h-name" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label text-white" htmlFor="form1-2h-message">Message</label>
                        <textarea className="form-control" name="message" rows="7" required="required" data-form-field="Message" id="form1-2h-message"></textarea>
                    </div>
                    <div>
                      <button type="button" className="btn btn-black submit-form" id="submit-form">
                        <span className="btn-text">CONTACT US</span>
                        <i className="btn-loader"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        }
        <hr className="sec-btm" />
      </section>
    );
  }
}
export default Section;