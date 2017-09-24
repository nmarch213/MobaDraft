import React, { Component } from 'react';
import _ from 'lodash';

import Hero from './Hero';

class HotsDraftHeroPool extends Component {
  renderHeroPool() {
    return _.map(this.props.hotsHeroes, hero => (
      <Hero key={hero.id} hero={hero} />
    ));
  }

  render() {
    console.log(this.props);
    return (
      <div className="container align-center">
        <h2>Heroes</h2>
        <div className="row">{this.renderHeroPool()}</div>
      </div>
    );
  }
}

export default HotsDraftHeroPool;
