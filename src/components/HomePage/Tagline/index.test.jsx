import React from "react"
import "jest-enzyme"

import {
  tagline,
  taglineTop,
  taglineBottom,
  taglineBottomUnderline,
} from "./styles.module.css"

import Tagline, { text } from "."

afterEach(cleanup)

describe("Tagline Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Tagline />)
  })

  it("should render the Tagline component", () => {
    const taglineComponent = wrapper.find(Tagline)

    expect(taglineComponent).toExist()
  })

  it('should render a <header> tag with a class name of "tagline"', () => {
    const headerTag = wrapper.find(`header.${tagline}`)

    expect(headerTag).toExist()
  })

  it('should render a <span> tag with a class name of "taglineTop"', () => {
    const spanTop = wrapper.find(`span.${taglineTop}`)

    expect(spanTop).toExist()
  })

  it('should render a <span> tag with a class name of "taglineBottom"', () => {
    const spanBottom = wrapper.find(`span.${taglineBottom}`)

    expect(spanBottom).toExist()
  })

  it('should render a <span> tag with a class name of "taglineBottomUnderline"', () => {
    const spanBottomUnderline = wrapper.find(`span.${taglineBottomUnderline}`)

    expect(spanBottomUnderline).toExist()
  })

  it("should render the top row of the Tagline ", () => {
    expect(wrapper.text()).toContain(text.top)
  })

  it("should render the bottom row of the Tagline text", () => {
    expect(wrapper.text()).toContain(text.bottom)
  })
})
