import React from "react"
import { BrowserRouter } from "react-router-dom"
import "jest-enzyme"

import Index from ".."
import HomePage from "components/HomePage/root"

afterEach(cleanup)

describe("Index Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    )
  })

  it("should render the Index component", () => {
    const index = wrapper.find(Index)

    expect(index).toExist()
  })

  it("should render the HomePage component", () => {
    const homePage = wrapper.find(HomePage)

    expect(homePage).toExist()
  })
})
