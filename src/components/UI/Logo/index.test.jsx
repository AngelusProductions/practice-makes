import React from "react"
import { BrowserRouter } from "react-router-dom"
import "jest-enzyme"

import Logo from "."

afterEach(cleanup)

describe("Logo Component", () => {
  let wrapper, props

  beforeEach(() => {
    props = homePageLogoText
    wrapper = mount(
      <BrowserRouter>
        <Logo {...props} />
      </BrowserRouter>
    )
  })

  it("should render the Logo component", () => {
    const logoComponent = wrapper.find(Logo)

    expect(logoComponent).toExist()
  })

  it("should render an <img> tag with the correct src and alt properties", () => {
    const imgTag = wrapper.find("img")

    expect(imgTag).toExist()
    expect(imgTag.props().src).toBe(homePageLogoText.src)
    expect(imgTag.props().alt).toBe(homePageLogoText.alt)
  })

  it('should render an <img> tag with a class name of "logo"', () => {
    const imgTag = wrapper.find(`img.${logo}`)

    expect(imgTag).toExist()
  })
})
