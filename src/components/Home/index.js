import React from "react";
import "./index.scss";
import Header from '../Header';
import Blogs from '../Blogs';
import Posts from '../Posts';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    const sty = {
      backgroundImage: "url('http://placehold.it/1900x1080')"
    };
    return (
      <div className="container-fluid1">
        <Header {...this.props} />
        <Blogs />
        <Posts />
      </div>
    );
  }
}
export default Home;