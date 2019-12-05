import React from "react"
import { BrowserRouter } from "react-router-dom"
import { cleanup } from "@testing-library/react"
import { mount } from "enzyme"
import "jest-enzyme"

import { homePageNavItems } from "constants/text"
import { dashIcon } from "./styles.module.css"

import NavItem from "."

afterEach(cleanup)

describe("NavItem Component", () => {
  let wrapper, props

  beforeEach(() => {
    props = { ...homePageNavItems[0], isNotLastItem: true }
    wrapper = mount(
      <BrowserRouter>
        <NavItem {...props} />
      </BrowserRouter>
    )
  })

  it("should render the NavItem component", () => {
    const navItemComponent = wrapper.find(NavItem)

    expect(navItemComponent).toExist()
  })

  it("should inherit the name, url and isNotLastItem props", () => {
    const navItemComponent = wrapper.find(NavItem)

    expect(navItemComponent.props().name).toBeDefined()
    expect(navItemComponent.props().url).toBeDefined()
    expect(navItemComponent.props().isNotLastItem).toBeDefined()
  })

  it("should render an <a> tag with the correct href property", () => {
    const aTag = wrapper.find("a")

    expect(aTag).toExist()
    expect(aTag.props().href).toBe(props.url)
  })

  it('should render a <div> tag with a class name of "dashIcon"', () => {
    const divTag = wrapper.find(`div.${dashIcon}`)

    expect(divTag).toExist()
  })
})
