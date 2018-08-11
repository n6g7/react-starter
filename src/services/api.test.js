import api from "./api"

describe("api", () => {
  beforeEach(() => {
    window.fetch = jest.fn()
  })

  it("renders well", () => {
    api()
    expect(window.fetch).toHaveBeenCalled()
  })
})
