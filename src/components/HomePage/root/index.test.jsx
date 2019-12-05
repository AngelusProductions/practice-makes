import React from "react"
import { BrowserRouter } from "react-router-dom"
import "jest-enzyme"

import { homePageNavItems } from "constants/text"
import { homePage } from "./styles.module.css"

import HomePage, { text } from "."
import SEO from "components/seo"
import Logo from "components/UI/Logo"
import Tagline from "../Tagline"
import NavMenu from "components/UI/NavMenu"

afterEach(cleanup)

describe("HomePage Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
  })

  it("should render the HomePage component", () => {
    const homePageComponent = wrapper.find(HomePage)

    expect(homePageComponent).toExist()
  })

  it("should render an SEO Component", () => {
    const seoComponent = wrapper.find(SEO)

    expect(seoComponent).toExist()
    expect(seoComponent.props().title).toBe(text.title)
  })

  it("should render a Logo component", () => {
    const logoComponent = wrapper.find(Logo)

    expect(logoComponent).toExist()
    expect(logoComponent.props().src).toBe(text.logoSrc)
  })

  it("should render a Tagline Component", () => {
    const taglineComponent = wrapper.find(Tagline)

    expect(taglineComponent).toExist()
  })

  it("should render the NavMenu component", () => {
    const navMenuComponent = wrapper.find(NavMenu)

    expect(navMenuComponent).toExist()
    expect(navMenuComponent.props().items).toBe(homePageNavItems)
  })

  it("should pass the NavMenu component the correct items prop", () => {
    const navMenuComponent = wrapper.find(NavMenu)
  })

  it('should render a <div> tag with a class name of "homePage"', () => {
    const divTag = wrapper.find(`div.${homePage}`)

    expect(divTag).toExist()
  })
})
