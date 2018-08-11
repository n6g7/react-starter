import { call, put, takeLatest } from "redux-saga/effects"

import { apiSuccess, apiFailure, types } from "@actions/api"

import api from "@services/api"

export function* apiCallSaga() {
  try {
    yield call(api)
    yield put(apiSuccess())
  } catch (error) {
    yield put(apiFailure(error))
  }
}

export default function* apiRootSaga() {
  yield takeLatest(types.API_CALL.REQUEST, apiCallSaga)
}
