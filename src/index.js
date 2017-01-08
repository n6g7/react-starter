import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from './components/App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
