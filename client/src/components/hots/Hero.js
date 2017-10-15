import React, { Component } from 'react';

class Hero extends Component {
  static propTypes = {};

  render() {
    const { hero } = this.props;
    return (
      <div className="card" key={hero.id}>
        <div className="card-image">
          <img
            className="card-img-top"
            src={hero.icon_url.size}
            alt={hero.short_name}
          />
        </div>
      </div>
    );
  }
}

export default Hero;
