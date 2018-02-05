import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'

import history from '../../history'

export const sagaMiddleware = createSagaMiddleware()

export default applyMiddleware(
  sagaMiddleware,
  routerMiddleware(history)
)
