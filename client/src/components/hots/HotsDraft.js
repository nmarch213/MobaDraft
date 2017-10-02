import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import {
  fetchHotsHeroes,
  fetchHotsDraftLobby,
  teamOneHeroBanned,
  teamOneHeroSelected,
  teamTwoHeroBanned,
  teamTwoHeroSelected
} from '../../actions/index';
import HotsDraftHeroPool from './HotsDraftHeroPool';
import HotsTeamDraft from './HotsTeamDraft';

class HotsDraft extends Component {
  componentDidMount() {
    this.props.fetchHotsHeroes();

    if (this.props.hots.Lobby) {
      this.props.fetchHotsDraftLobby(this.props.hots.Lobby._id);
    }
  }

  handleClick = hero => {
    const socket = io(`http://localhost:5000/`);
    socket.emit('hero', { hero: hero });
    socket.on('heroDrafted', function(data) {
      console.log(hero.name + ' has been drafted');
    });
    this.props.teamOneHeroSelected(hero.id);
  };

  render() {
    const { Lobby, Heroes } = this.props.hots;
    const { drafterToken, id } = this.props.match.params;
    if (!Lobby) {
      return <Redirect to="/hots" />;
    }

    if (id) {
      const socket = io(`http://localhost:5000/`);
      socket.on('connect', function(data) {
        socket.emit('session', { id: id });
      });
    }
    return (
      <div className="row">
        <HotsTeamDraft
          Lobby={Lobby}
          draft="teamOneDraft"
          teamName={Lobby.teamOneName}
          hotsHeroes={Heroes}
        />
        <HotsDraftHeroPool
          hotsHeroes={Heroes}
          teamOneToken={Lobby.teamOneToken}
          teamTwoToken={Lobby.teamTwoToken}
          drafterToken={drafterToken}
          onClick={hero => this.handleClick(hero)}
        />
        <HotsTeamDraft
          Lobby={Lobby}
          draft="teamTwoDraft"
          teamName={Lobby.teamTwoName}
          hotsHeroes={Heroes}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchHotsHeroes: () => dispatch(fetchHotsHeroes()),
    fetchHotsDraftLobby: id => dispatch(fetchHotsDraftLobby(id)),
    teamOneHeroSelected: id => dispatch(teamOneHeroSelected(id)),
    teamTwoHeroSelected: id => dispatch(teamTwoHeroSelected(id)),
    teamOneHeroBanned: id => dispatch(teamOneHeroBanned(id)),
    teamTwoHeroBanned: id => dispatch(teamTwoHeroBanned(id))
  };
};

function mapStateToProps({ hots }) {
  return { hots };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotsDraft);
