import React from "react";
import "./index.scss";
import Header from '../Header';
import Section from '../Section';
import Footer from '../Footer';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  componentDidMount() {
    $('.navbar').removeClass('nav-scrolled-top direct-page');
  }
  render() {
    const { headerContent, homeContent } = this.props;
    const sectionData = homeContent.header;
    return (
      <div className="home-page">
        <Header {...this.props} slider={headerContent.slider} />
        {
          sectionData.map((item, index) => {
            return (<Section key={index} sectionData={item} />)
          })
        }
        <Footer />
      </div>
    );
  }
}
export default Home;