import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { fetchHotsHeroes } from '../../actions/index';
import HotsDraftHeroPool from './HotsDraftHeroPool';

class HotsDraft extends Component {
  componentDidMount() {
    this.props.fetchHotsHeroes();
    const socket = io('http://localhost:5000');
    socket.on('connect', () => {
      console.log(socket.id);
    });
  }

  render() {
    return (
      <div className="">
        <div className="jumbotron">
          <h1>Heroes of The Storm Draft</h1>
        </div>
        <HotsDraftHeroPool hotsHeroes={this.props.hots.Heroes} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return { fetchHotsHeroes: () => dispatch(fetchHotsHeroes()) };
};

function mapStateToProps({ hots }) {
  return { hots };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotsDraft);
