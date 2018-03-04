import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import * as models from './models';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// initialise the store with our models
const store = init({
  models
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
