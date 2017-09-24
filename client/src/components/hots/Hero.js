import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div className="container">
        <a href={this.props.hero.url}>
          <div className="card col s3 m2 l2">
            <div className="card-image">
              <img src={this.props.hero.portrait.medium} />
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Hero;
