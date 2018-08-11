import { types } from "@actions/api"

const initialState = {
  loading: false,
}

export default function api(state = initialState, action = {}) {
  switch (action.type) {
    case types.API_CALL.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.API_CALL.SUCCESS:
    case types.API_CALL.FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
