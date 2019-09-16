import React, { Component } from 'react'
import "./index.scss";
import Section from '../../Section';
import Footer from '../../Footer';

class GetBuyingCenterInsight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  componentDidMount() {
    $('.navbar').addClass('nav-scrolled-top direct-page');
  }
  render() {
    const { getBuyingCenterInsight } = this.props;
    const sectionData = getBuyingCenterInsight;
    return (
      <div className="home-page">
        {
          sectionData.map((item, index) => {
            return (<Section key={index} sectionData={item} />)
          })
        }
        <Footer />
      </div>
    )
  }
}
export default GetBuyingCenterInsight