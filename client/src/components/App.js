import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import * as actions from '../actions';
import './App.css';

import Header from './layout/Header';
import Landing from './layout/Landing';
import Hots from './hots/Hots';
import HotsDraft from './hots/HotsDraft';
import HotsDraftPreLobby from './hots/HotsDraftPreLobby';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Particles
            params={{
              particles: {
                number: {
                  value: 160
                },
                color: {
                  value: '#ffffff'
                },
                line_linked: {
                  enable: false
                },
                size: {
                  value: 3,
                  random: true
                }
              }
            }}
          />
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
    );
  }
}

export default connect(null, actions)(App);
