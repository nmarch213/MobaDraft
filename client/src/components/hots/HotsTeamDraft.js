import React, { Component } from 'react';
import _ from 'lodash';

import Hero from './Hero';

class HotsTeamDraft extends Component {
  renderDraft = () => {
    if (this.props.Lobby.HotsDraft) {
      return _.map(`this.props.Lobby.HotsDraft.${this.props.draft}`, hero => (
        <div key={hero.id} className="row">
          <Hero hero={`this.props.hotsHeroes.${hero.id}`} />
        </div>
      ));
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="col-3">
        <div>{this.props.teamName}</div>
        {this.renderDraft()}
      </div>
    );
  }
}

export default HotsTeamDraft;
