import { createSelector } from "reselect"

const rawAPISelector = state => state.api

export const isLoadingSelector = createSelector(rawAPISelector, api => api.loading)
