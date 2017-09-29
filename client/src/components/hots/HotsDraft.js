import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { fetchHotsHeroes, fetchHotsDraftLobby } from '../../actions/index';
import HotsDraftHeroPool from './HotsDraftHeroPool';
import HotsTeamDraft from './HotsTeamDraft';

class HotsDraft extends Component {
  componentDidMount() {
    this.props.fetchHotsHeroes();
    const socket = io('http://localhost:5000');
    socket.on('connect', () => {
      console.log(socket.id);
    });

    if (this.props.hots.Lobby) {
      this.props.fetchHotsDraftLobby(this.props.hots.Lobby._id);
    }
  }

  render() {
    const { Lobby, Heroes } = this.props.hots;
    if (!Lobby) {
      return <Redirect to="/hots" />;
    }
    return (
      <div className="row">
        <HotsTeamDraft
          teamName={Lobby.teamOneName}
          token={Lobby.teamOneToken}
          hotsHeroes={Heroes}
        />
        <HotsDraftHeroPool hotsHeroes={Heroes} />
        <HotsTeamDraft
          teamName={Lobby.teamTwoName}
          token={Lobby.teamTwoToken}
          hotsHeroes={Heroes}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchHotsHeroes: () => dispatch(fetchHotsHeroes()),
    fetchHotsDraftLobby: id => dispatch(fetchHotsDraftLobby(id))
  };
};

function mapStateToProps({ hots }) {
  return { hots };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotsDraft);
