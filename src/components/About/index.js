import React from "react";
import "./index.scss";
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
    $('.navbar').addClass('nav-scrolled-top direct-page');
  }
  render() {
    const { aboutContent } = this.props;
    const sectionData = aboutContent.sectionData;
    return (
      <div className="home-page">
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