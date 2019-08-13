import React from "react";
import "./index.scss";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div>Home</div>
    );
  }
}
export default Home;