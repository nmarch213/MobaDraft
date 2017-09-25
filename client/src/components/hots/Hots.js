import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchHotsHeroes } from '../../actions/index';
import HotsNewDraft from './HotsNewDraft';

class Hots extends Component {
  componentDidMount() {
    this.props.fetchHotsHeroes();
  }

  newDraftSubmit() {}

  render() {
    return (
      <div className="">
        <div className="jumbotron">
          <h1 className="display-3 align-self-center">Heroes of the Storm</h1>
          <Link to="/hots/draft">
            <button type="button" className="btn btn-primary">
              New Draft
            </button>
          </Link>
        </div>
        <HotsNewDraft handleSubmit={this.newDraftSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { fetchHotsHeroes: () => dispatch(fetchHotsHeroes()) };
};

function mapStateToProps({ hotsHeroes }) {
  return { hotsHeroes };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hots);
