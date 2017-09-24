import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchHotsHeroes } from '../../actions/index';
import Hero from './Hero';

class Hots extends Component {
  componentDidMount() {
    this.props.fetchHotsHeroes();
  }

  render() {
    console.log(this.props);
    return (
      <div className="container center-align">
        <h1>Heroes of the Storm</h1>
        <Link to="/hots/draft">
          <a className="waves-effect waves-light btn">New Draft</a>
        </Link>
        <Hero variables={this.props.hotsHeroes} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { fetchHotsHeroes: () => dispatch(fetchHotsHeroes()) };
};

function mapStateToProps({ hotsHeroes }) {
  return { hotsHeroes };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hots);
