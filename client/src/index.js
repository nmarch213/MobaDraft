import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { whyDidYouUpdate } from "why-did-you-update";
import App from "./components/App";
import reducers from "./reducers";

// if (process.env.NODE_ENV !== 'production') {
//   let createClass = React.createClass;
//   Object.defineProperty(React, 'createClass', {
//     set: nextCreateClass => {
//       createClass = nextCreateClass;
//     }
//   });
//   console.log('wrapping with whyDidYouUpdate');
//   whyDidYouUpdate(React, { exclude: /^(Link|ReduxForm|Field)/ });
// }

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
