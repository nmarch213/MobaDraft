import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { postHotsDraftLobby, fetchHotsDraftLobby } from '../../actions/index';
import HotsNewDraft from './HotsNewDraft';

class Hots extends Component {
  newDraftSubmit = values => {
    this.props.postHotsDraftLobby(values);
  };

  render() {
    const { Lobby } = this.props.hots;

    if (Lobby) {
      this.props.fetchHotsDraftLobby(Lobby._id);
      return <Redirect to="/hots/draft" />;
    }
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
        <HotsNewDraft onSubmit={this.newDraftSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHotsDraftLobby: id => dispatch(fetchHotsDraftLobby(id)),
    postHotsDraftLobby: values => dispatch(postHotsDraftLobby(values))
  };
};

function mapStateToProps({ hots, form }) {
  return { hots, form };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hots);
