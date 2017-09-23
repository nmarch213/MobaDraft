import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHotsHeroes } from '../actions/index';

class Hots extends Component {
  componentDidMount() {
    this.props.fetchHotsHeroes();
  }

  render() {
    console.log(this.props);
    return <div className="container" />;
  }
}

const mapDispatchToProps = dispatch => {
  return { fetchHotsHeroes: () => dispatch(fetchHotsHeroes()) };
};

function mapStateToProps({ hotsHeroes }) {
  return { hotsHeroes };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hots);
