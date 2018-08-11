import { isLoadingSelector } from "./api"

describe("API selectors", () => {
  describe("isLoadingSelector", () => {
    it("works", () => {
      const loading = "qsdkopql"
      const state = { api: { loading } }

      expect(isLoadingSelector(state)).toBe(loading)
    })
  })
})
