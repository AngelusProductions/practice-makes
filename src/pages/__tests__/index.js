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

  it("should render an SEO Component", () => {
    const seoComponent = wrapper.find(SEO)

    expect(seoComponent).toExist()
  })

  it("should pass the SEO component the correct title prop", () => {
    const seoComponents = wrapper.find(SEO)

    expect(seoComponents.some(c => c.title === text.title))
  })

  it("should render the HomePage component", () => {
    const homePage = wrapper.find(HomePage)

    expect(homePage).toExist()
  })
})
