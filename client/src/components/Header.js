import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
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

function mapStateToProps({}) {
  return {};
}

export default connect(mapStateToProps)(Header);
