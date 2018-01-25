import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import api from './api'

export default combineReducers({
  api,
  form: formReducer,
  router: routerReducer
})
