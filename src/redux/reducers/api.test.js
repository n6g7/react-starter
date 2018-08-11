import { api, apiSuccess, apiFailure } from "@actions/api"

import reducer from "./api"

describe("API reducer", () => {
  it("provides an initial state", () => {
    expect(reducer()).toEqual({
      loading: false,
    })
  })

  it("handles REQUEST actions", () => {
    const action = api()

    expect(reducer(null, action)).toHaveProperty("loading", true)
  })

  it("handles SUCCESS actions", () => {
    const state = {
      loading: true,
    }
    const action = apiSuccess()

    expect(reducer(state, action)).toHaveProperty("loading", false)
  })

  it("handles FAILURE actions", () => {
    const state = {
      loading: true,
    }
    const action = apiFailure()

    expect(reducer(state, action)).toHaveProperty("loading", false)
  })
})
