export const types = {
  API_CALL: {
    REQUEST: "API_CALL.REQUEST",
    SUCCESS: "API_CALL.SUCCESS",
    FAILURE: "API_CALL.FAILURE",
  },
}

export const api = () => ({
  type: types.API_CALL.REQUEST,
})

export const apiSuccess = result => ({
  type: types.API_CALL.SUCCESS,
  result,
})

export const apiFailure = error => ({
  type: types.API_CALL.FAILURE,
  error,
})
