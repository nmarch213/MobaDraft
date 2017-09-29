import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './layout/Header';
import Landing from './layout/Landing';
import Hots from './hots/Hots';
import HotsDraft from './hots/HotsDraft';
import HotsDraftPreLobby from './hots/HotsDraftPreLobby';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/hots" component={Hots} />
            <Route
              exact
              path="/hots/draft/:id/:drafterToken"
              component={HotsDraft}
            />
            <Route exact path="/hots/draft/:id" component={HotsDraft} />
            <Route exact path="/hots/draft" component={HotsDraftPreLobby} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
