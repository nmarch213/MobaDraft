import React, { Component } from 'react';

class Hero extends Component {
  static propTypes = {};

  render() {
    const { hero } = this.props;
    return <img className="heroPortrait" src={hero.icon} alt={hero.name} />;
  }
}

export default Hero;
