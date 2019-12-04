import React from "react"
import "jest-enzyme"

import Index, { text } from ".."
import SEO from "components/seo"
import HomePage from "components/HomePage/root"

afterEach(cleanup)

describe("Index Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Index />)
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
