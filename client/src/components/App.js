import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './layout/Header';
import Landing from './layout/Landing';
import Hots from './hots/Hots';
import HotsDraft from './hots/HotsDraft';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/hots" component={Hots} />
            <Route exact path="/hots/draft" component={HotsDraft} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
