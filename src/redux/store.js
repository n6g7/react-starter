import { createStore, compose } from 'redux';

import reducers from './reducers';
import { middlewares } from './enhancers';

const enhancers = compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(
  reducers,
  enhancers
);
