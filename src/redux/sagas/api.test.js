import { call, put, takeLatest } from "redux-saga/effects"

import { apiSuccess, apiFailure, types } from "@actions/api"
import api from "@services/api"

import apiRootSaga, { apiCallSaga } from "./api"

describe("API sagas", () => {
  describe("apiRootSaga", () => {
    it("works", () => {
      const saga = apiRootSaga()

      expect(saga.next()).toEqual({
        done: false,
        value: takeLatest(types.API_CALL.REQUEST, apiCallSaga),
      })

      expect(saga.next()).toEqual({
        done: true,
        value: undefined,
      })
    })
  })

  describe("apiCallSaga", () => {
    it("works", () => {
      const saga = apiCallSaga()

      expect(saga.next()).toEqual({
        done: false,
        value: call(api),
      })

      expect(saga.next()).toEqual({
        done: false,
        value: put(apiSuccess()),
      })

      expect(saga.next()).toEqual({
        done: true,
        value: undefined,
      })
    })

    it("handles errors", () => {
      const saga = apiCallSaga()
      const error = "meeeh"

      expect(saga.next()).toEqual({
        done: false,
        value: call(api),
      })

      expect(saga.throw(error)).toEqual({
        done: false,
        value: put(apiFailure(error)),
      })

      expect(saga.next()).toEqual({
        done: true,
        value: undefined,
      })
    })
  })
})
