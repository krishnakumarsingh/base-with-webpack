import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  }
  render() {
    return (
      <div>
        <section className="mb-4">
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input
                          className="form-control"
                          type="text"
                          name="title"
                          onChange={this.onChange}
                          value={this.state.title}
                        />
                        <label htmlFor="title" className="">Your name</label>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        className="form-control md-textarea"
                        name="body"
                        onChange={this.onChange}
                        value={this.state.body}
                      />
                      <label htmlFor="body">Your message</label>
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <button className="btn btn-primary" type="submit">Submit</button>
                </div>
                <div className="status"></div>
              </form>
            </div>
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>San Francisco, CA 94126, USA</p>
                </li>
                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 01 234 567 89</p>
                </li>
                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@mdbootstrap.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
ContactUs.propTypes = {
  createPost: PropTypes.func.isRequired
};
export default connect(null, { createPost })(ContactUs);