import React from "react";
import "./index.scss";
import laptopSrc from '../../assets/images/laptop-ui.png';
import iphoneSrc from '../../assets/images/iphone-ui.png';
import ipadSrc from '../../assets/images/ipad-ui.png';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  circleFormation() {
    $(function() {
      var deg = 0;
      var rotate = 1;
      var club_rotate = setInterval(club_rotate, 50);
      $('.circle-container-buying-center > li').not(".circle-container-buying-center > *:nth-of-type(8)").mouseenter(function() {
        rotate = 0
      });
      $('.circle-container-buying-center > li').not(".circle-container-buying-center > *:nth-of-type(8)").mouseleave(function() {
        rotate = 1
      });
      function club_rotate() {
        if (rotate == 0) {
          return
        }
        deg = get_deg(deg + 1);
        var deg0 = deg;
        var $data = $('.carousel-item.active .circle-container-buying-center').children().not(".circle-container-buying-center > *:nth-of-type(8)");
        var length = 10;
        if ($(window).width() <= 540) {
          length = 10
        }
        var dataDist = Math.round(360/7);
        $data.each(function() {
          $(this).css({
            "-webkit-transform": "rotate(" + deg0 + "deg) translate(" + length + "em) rotate(-" + deg0 + "deg)",
            "transform": "rotate(" + deg0 + "deg) translate(" + length + "em) rotate(-" + deg0 + "deg)"
          });
          deg0 = get_deg(deg0 + dataDist)
        })
      }
      function get_deg(deg0) {
        if (deg0 > 360)
          return (deg0 - 360);
        else return deg0
      }
    });
  }
  componentDidMount() {
    this.circleFormation();
  }
  render() {
    const { homeContent } = this.props;
    const slider = [
      {
        'title': 'Buying Center ?',
        'grid': [6, 6],
        'lead': '',
        'btn': ['LEARN MORE', './get-buying-center-insight.html'],
        'ulCircle': true,
        'ulRes': false,
        'ulList': [{
          text: 'User', class: ''
        }, {
          text: 'Influencers', class: ''
        }, {
          text: 'Deciders', class: ''
        }, {
          text: 'Approvers', class: ''
        }, {
          text: 'Buyers', class: ''
        }, {
          text: 'Gatekeepers', class: ''
        }, {
          text: 'Initiators', class: ''
        }],
        'ulCenter': 'Buying Center1',
        'secDivClass': '',
        'sliderImg': '-webkit-linear-gradient(30deg, #013A6B 50%, #004E95 50%)'
      }, {
        'title': 'Data Quality ?',
        'grid': [6, 6],
        'lead': `While many organizations boast of having good data or improving the quality of their data, we believe customer's data should be properly oriented, shorted & simplified.`,
        'btn': ['LEARN MORE', './database-management.html'],
        'ulCircle': false,
        'ulRes': false,
        'ulList': [],
        'ulCenter': '',
        'secDivClass': '',
        'sliderImg': '-webkit-linear-gradient(30deg, #013A6B 50%, #004E95 50%)'
      }, {
        'title': 'Web Development',
        'grid': [12, 12],
        'lead': '',
        'btn': ['LEARN MORE', './website-development.html'],
        'ulCircle': true,
        'ulRes': true,
        'ulList': [{
          class: 'laptop-img', text: laptopSrc
        }, {
          class: 'iphone-img', text: iphoneSrc
        }, {
          class: 'ipad-img', text: ipadSrc
        }],
        'ulCenter': '',
        'secDivClass': 'img-responsive-design',
        'sliderImg': '-webkit-linear-gradient(30deg, #013A6B 50%, #004E95 50%)'
      }
    ];
    const sliderList = slider.map((i, j) => {
      const sty = {
        /* backgroundImage: `url('${i.sliderSrc}')`, */
        display: 'table'
      };
      return (
        <div key={j} className={`carousel-item parallax buying-center slider-${j} ${j === 0 ? 'active' : ''}`} data-img={i.sliderImg}>
          <div className="base-table-cell">
            <div className="container">
              <div className="row">
                <div className={`col-md-${i.grid[0]} text-xs-center animated-text`}>
                  <h1 className="base-section-title display-1 KaushanScript mt-title-4">{i.title}</h1>
                  <p className="base-section-lead lead Montserrat">{i.lead}</p>
                  <div className="base-section-btn animated-text-2">
                    <a className="btn btn-lg btn-secondary-outline border-white btn-secondary" href={i.btn[1]}>{i.btn[0]}</a>
                  </div>
                </div>
                {i.ulCircle && <div className={`col-md-${i.grid[1]} ${i.secDivClass}`}>
                  <div className={`${i.ulRes ? '' : 'carousel-buying-center-data'} col-md-${i.grid[1]}`}>
										<ul className={`${i.ulRes ? 'slider-responsive' : 'circle-container-buying-center'}`} data-center={i.ulCenter}>
                      {
                        i.ulList.map((i1, j1) => {
                          if(!i.ulRes) {
                            return (<li key={j1}>{i1.text}</li>)
                          } else if (i.ulRes) {
                            return (<li key={j1} className={i1.class}><img src={i1.text} /></li>)
                          }
                        })
                      }
										</ul>
									</div>
                </div>}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <header>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators test">
            {slider.map((i, j) => {
              return (<li key={j} data-target="#carouselExampleIndicators" data-slide-to={`${j}`} className={`${j === 0 ? 'active' : ''}`}></li>);
            })}
          </ol>
          {<div className="carousel-inner" role="listbox">
            {sliderList}
          </div>}
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