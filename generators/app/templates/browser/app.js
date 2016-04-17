import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import application from './reducers';
import App from './components/App';

const store = createStore(application);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('application-root')
);
