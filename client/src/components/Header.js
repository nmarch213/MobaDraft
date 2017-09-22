import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchHotsHeroes } from '../actions/index';

class Header extends Component {
  componentDidMount() {
    this.props.fetchHotsHeroes();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <Link to="/" className="left brand-logo">
              MobaDraft
            </Link>

            <ul className="right">
              <li>
                <Link to="/hots">Heroes of The Storm</Link>
              </li>
              <li>
                <Link to="/dota">DOTA 2</Link>
              </li>
              <li>
                <Link to="/lol">League of Legends</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return { fetchHotsHeroes: () => dispatch(fetchHotsHeroes()) };
};
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
