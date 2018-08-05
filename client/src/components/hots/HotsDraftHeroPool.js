import React, { Component } from 'react';

import Hero from './Hero';

class HotsDraftHeroPool extends Component {
  renderHeroPool(hotsHeroes) {
    return hotsHeroes.map(hero => (
      <div key={hero.id} onClick={() => this.props.onClick(hero)}>
        <Hero hero={hero} />
      </div>
    ));
  }

  render() {
    const { hotsHeroes } = this.props;
    return (
      <div className="container col-6">
        <h2>Heroes</h2>
        <div className="row">{this.renderHeroPool(hotsHeroes)}</div>
      </div>
    );
  }
}

export default HotsDraftHeroPool;
