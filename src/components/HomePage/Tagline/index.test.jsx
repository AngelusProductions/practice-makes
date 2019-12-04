import React from "react"
import "jest-enzyme"

import {
  tagLine,
  tagLineTopText,
  tagLineBottomText,
  tagLineBottomUnderline,
} from "./styles.module.css"

import TagLine, { text } from "."

afterEach(cleanup)

describe("TagLine Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<TagLine />)
  })

  it("should render the TagLine component", () => {
    const TagLineComponent = wrapper.find(TagLine)

    expect(TagLineComponent).toExist()
  })

  it('should render an <h1> tag with a class name of "TagLine"', () => {
    const hOneTag = wrapper.find(`h1.${tagLine}`)

    expect(hOneTag).toExist()
  })

  it('should render a <span> tag with a class name of "tagLineTopText"', () => {
    const spanTopText = wrapper.find(`span.${tagLineTopText}`)

    expect(spanTopText).toExist()
  })

  it('should render a <span> tag with a class name of "tagLineBottomText"', () => {
    const spanBottomText = wrapper.find(`span.${tagLineBottomText}`)

    expect(spanBottomText).toExist()
  })

  it('should render a <span> tag with a class name of "tagLineBottomUnderline"', () => {
    const spanBottomUnderline = wrapper.find(`span.${tagLineBottomUnderline}`)

    expect(spanBottomUnderline).toExist()
  })

  it("should render the top row of the TagLine text", () => {
    expect(wrapper.text()).toContain(text.topText)
  })

  it("should render the bottom row of the TagLine text", () => {
    expect(wrapper.text()).toContain(text.bottomText)
  })
})
