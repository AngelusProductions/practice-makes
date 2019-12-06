import React from "react"
import { BrowserRouter } from "react-router-dom"
import { cleanup } from "@testing-library/react"
import { mount } from "enzyme"
import "jest-enzyme"

import { rootPath, blogPath } from "constants/paths"
import { homePageNavItems } from "constants/text"
import { navMenuHome, navMenuDefault } from "./styles.module.css"

import NavMenu from "."
import NavItem from "components/UI/NavItem"

afterEach(cleanup)

describe("NavMenu Component", () => {
  let wrapper, props

  beforeEach(() => {
    props = { items: homePageNavItems }
    wrapper = mount(
      <BrowserRouter>
        <NavMenu {...props} />
      </BrowserRouter>
    )
  })

  it("should render the NavMenu component", () => {
    const navMenuComponent = wrapper.find(NavMenu)

    expect(navMenuComponent).toExist()
  })

  it("should mount the NavItem components", () => {
    const navItemComponents = wrapper.find(NavItem)

    expect(navItemComponents).toExist()
    expect(navItemComponents.length).toBe(homePageNavItems.length)
  })

  it("should pass the NavItem components the name, url and isNotLastItem props", () => {
    const navItemComponents = wrapper.find(NavItem)

    navItemComponents.forEach(navItemComponent => {
      expect(navItemComponent.props().name).toBeDefined()
      expect(navItemComponent.props().url).toBeDefined()
      expect(navItemComponent.props().isNotLastItem).toBeDefined()
    })
  })

  it('should render a <nav> tag with the class name "navMenuHome" when on root path', () => {
    const navTag = wrapper.find(`nav.${navMenuHome}`)

    expect(navTag).toExist()
  })
})
