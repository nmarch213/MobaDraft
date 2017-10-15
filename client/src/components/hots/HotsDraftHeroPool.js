import React, { Component } from 'react';
import _ from 'lodash';

import Hero from './Hero';

class HotsDraftHeroPool extends Component {
  renderHeroPool() {
    return _.map(this.props.hotsHeroes, hero => (
      <button key={hero.id} onClick={() => this.props.onClick(hero)}>
        <Hero hero={hero} />
      </button>
    ));
  }

  render() {
    return (
      <div className="container col-6">
        <h2>Heroes</h2>
        <div className="row">{this.renderHeroPool()}</div>
      </div>
    );
  }
}

export default HotsDraftHeroPool;
