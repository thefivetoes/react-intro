import React from 'react';
import ReactDOM from 'react-dom';

import rootReducer from './reducers'
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import MainDashboard from './components/MainDashboard';

let store = createStore(
  rootReducer
);

/**
 * Inject the store into <Root> so that its passed down into the component
 * graph
 */
ReactDOM.render(
  <div className="structural-element">
    <Provider store={store}>
      <MainDashboard />
    </Provider>
  </div>,
  document.getElementById('root')
);
