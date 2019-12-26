import React from "react"
import { BrowserRouter } from "react-router-dom"
import "jest-enzyme"

import { appName } from "constants/text"
import { logo } from "./styles.module.css"

import Logo from "."
import { text } from "components/HomePage/root"

afterEach(cleanup)

describe("Logo Component", () => {
  let wrapper, props

  beforeEach(() => {
    props = { src: text.logoSrc, width: text.logoWidth }
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
    expect(imgTag.props().src).toBe(props.src)
    expect(imgTag.props().alt).toBe(appName)
  })

  it('should render an <img> tag with a class name of "logo"', () => {
    const imgTag = wrapper.find(`img.${logo}`)

    expect(imgTag).toExist()
  })
})
