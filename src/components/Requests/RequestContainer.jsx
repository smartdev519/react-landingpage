import React, { Component } from "react";
import RequestList from './RequestList';

class RequestContainer extends React.Component {
  state = { requests: [] };
  componentDidMount() {
    //fetchSomeComments(comments =>
    //  this.setState({ comments: comments }));
  }
  render() {
    return <RequestList requests={this.state.requets} />;
  }
}


export default RequestContainer;