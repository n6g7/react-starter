import { call, put, takeLatest } from 'redux-saga/effects'

import {
  apiSuccess,
  apiFailure,
  types
} from '@actions/api'

import api from '@services/api'

function * apiCallSaga () {
  try {
    yield call(api.something)
    yield put(apiSuccess())
  } catch (error) {
    yield put(apiFailure(error))
  }
}

export default function * apiSaga () {
  yield takeLatest(types.API_CALL.REQUEST, apiCallSaga)
}
