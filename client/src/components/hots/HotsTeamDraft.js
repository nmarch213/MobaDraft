import React, { Component } from 'react';
import _ from 'lodash';

import Hero from './Hero';

class HotsTeamDraft extends Component {
  renderDraft() {
    return _.map(this.props.teamDraft, hero => (
      <div className="row">
        <Hero key={hero.id} hero={this.props.hotsHeroes[hero.id]} />
      </div>
    ));
  }

  render() {
    return (
      <div className="col-3">
        <div>{this.props.teamName}</div>
      </div>
    );
  }
}

export default HotsTeamDraft;
