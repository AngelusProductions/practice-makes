import React from "react"
import "jest-enzyme"

import PageNotFound, { text } from "../404"

afterEach(cleanup)

describe("PageNotFound Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<PageNotFound />)
  })

  it("should render a PageNotFound Component", () => {
    const pageNotFoundComponent = wrapper.find(PageNotFound)

    expect(pageNotFoundComponent).toExist()
  })

  it("should render a <p> tag", () => {
    const pTag = wrapper.find("p")

    expect(pTag).toExist()
  })

  it('should render the "pageNotFoundText" text', () => {
    expect(wrapper.text()).toContain(text.pageNotFound)
  })
})
