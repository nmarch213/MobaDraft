import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class HotsDraftPreLobby extends Component {
  render() {
    const { Lobby } = this.props;

    if (!Lobby) {
      return <Redirect to="/hots" />;
    }

    return (
      <div>
        <div className="jumbotron">
          <div className="form-group">
            <div className="center-label">
              <label htmlFor="teamOneLink">
                <Link to={`/hots/draft/${Lobby._id}/${Lobby.teamOneToken}`}>
                  Team One Draft Link
                </Link>
              </label>
            </div>
            <input
              type="text"
              className="select-on-click form-control"
              id="teamOneLink"
              readOnly
              value={`/hots/draft/${Lobby._id}/${Lobby.teamOneToken}`}
            />
          </div>
          <div className="form-group">
            <div className="center-label">
              <label htmlFor="teamOneLink">
                <Link to={`/hots/draft/${Lobby._id}/${Lobby.teamTwoToken}`}>
                  Team Two Draft Link
                </Link>
              </label>
            </div>
            <input
              type="text"
              className="select-on-click form-control"
              id="teamOneLink"
              readOnly
              value={`/hots/draft/${Lobby._id}/${Lobby.teamTwoToken}`}
            />
          </div>
          <div className="form-group">
            <div className="center-label">
              <label htmlFor="teamOneLink">
                <Link to={`/hots/draft/${Lobby._id}/`}>Viewer Link</Link>
              </label>
            </div>
            <input
              type="text"
              className="select-on-click form-control"
              id="teamOneLink"
              readOnly
              value={`/hots/draft/${Lobby._id}/`}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ hots }) {
  return hots;
}

export default connect(mapStateToProps, null)(HotsDraftPreLobby);
