import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="card">
        <a href={this.props.hero.url}>
          <div className="card-image">
            <img
              className="card-img-top"
              src={this.props.hero.portrait.medium}
              alt={this.props.hero.name}
            />
          </div>
        </a>
      </div>
    );
  }
}

export default Hero;
