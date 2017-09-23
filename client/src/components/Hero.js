import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class Hero extends Component {
  renderHeroes() {
    return _.map(this.props.variables, hero => (
      <Link to={hero.url}>
        <div className="card col s6 m1 l1" key={hero.id}>
          <div className="card-image">
            <img src={hero.portrait.medium} />
            {/* <div className="card-content">{hero.name}</div> */}
          </div>
        </div>
      </Link>
    ));
  }

  render() {
    console.log('hots: ', this.props.variables);
    const { variables } = this.props;

    if (!variables) {
      return <div>Loading...</div>;
    }
    return (
      <div className="row">
        <div className="col">{this.renderHeroes()}</div>
      </div>
    );
  }
}

export default Hero;
