import React from "react"
import "jest-enzyme"

import { appName } from "constants/text"

import HomePage, { text } from "."
import SEO from "components/seo"

afterEach(cleanup)

describe("HomePage Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<HomePage />)
  })

  it("should render the HomePage component", () => {
    const homePageComponent = wrapper.find(HomePage)

    expect(homePageComponent).toExist()
  })

  it("should render an SEO Component", () => {
    const seoComponent = wrapper.find(SEO)

    expect(seoComponent).toExist()
  })

  it("should pass the SEO component the correct title prop", () => {
    const seoComponent = wrapper.find(SEO)

    expect(seoComponent.props().title).toBe(text.title)
  })

  it("should render a <p> tag", () => {
    const pTag = wrapper.find("p")

    expect(pTag).toExist()
  })

  it("should render the app's name", () => {
    expect(wrapper.text()).toContain(appName)
  })
})
