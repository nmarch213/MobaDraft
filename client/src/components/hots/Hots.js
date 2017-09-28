import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchHotsHeroes, postHotsDraftLobby } from '../../actions/index';
import HotsNewDraft from './HotsNewDraft';

class Hots extends Component {
  componentDidMount() {
    this.props.fetchHotsHeroes();
  }

  newDraftSubmit = values => {
    this.props.postHotsDraftLobby(values);
  };

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
        <HotsNewDraft onSubmit={this.newDraftSubmit.bind(this)} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHotsHeroes: () => dispatch(fetchHotsHeroes()),
    postHotsDraftLobby: values => dispatch(postHotsDraftLobby(values))
  };
};

function mapStateToProps({ hots, form }) {
  return { hots, form };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hots);
