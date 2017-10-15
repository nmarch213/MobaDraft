import React, { Component } from 'react';
import _ from 'lodash';

import Hero from './Hero';

class HotsTeamDraft extends Component {
  showHeroes = (team, heroes) => {
    return _.map(team, hero => (
      <div className="row">
        <Hero hero={heroes[hero]} />
      </div>
    ));
  };
  renderDraft = (draft, heroes, Lobby) => {
    if (Lobby.HotsDraft) {
      if (draft == 'teamOneDraft') {
        return this.showHeroes(Lobby.HotsDraft.teamOneDraft, heroes);
      } else {
        return this.showHeroes(Lobby.HotsDraft.teamTwoDraft, heroes);
      }
    }
  };

  render() {
    const { Lobby, draft, teamName, hotsHeroes } = this.props;
    return (
      <div className="col-3">
        <div>{teamName}</div>
        {/* {this.renderDraft(draft, hotsHeroes, Lobby)} */}
      </div>
    );
  }
}

export default HotsTeamDraft;
