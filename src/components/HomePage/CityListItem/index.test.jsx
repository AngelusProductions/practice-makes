import React from "react"
import { BrowserRouter } from "react-router-dom"
import { cleanup } from "@testing-library/react"
import { mount } from "enzyme"
import "jest-enzyme"

import { cities } from "constants/data"
import { mapMarkerIconProps } from "constants/text"
import {
  cityListItem,
  cityListItemLabel,
  mapMarkerIcon,
} from "./styles.module.css"

import CityListItem from "../CityListItem"

afterEach(cleanup)

describe("CityListItem Component", () => {
  let wrapper, props

  beforeEach(() => {
    props = cities[0]
    wrapper = mount(
      <BrowserRouter>
        <CityListItem {...props} />
      </BrowserRouter>
    )
  })

  it("should render the CityListItem component", () => {
    const cityListItemComponent = wrapper.find(CityListItem)

    expect(cityListItemComponent).toExist()
  })

  it("should render an <li> tag with the correct background image", () => {
    const liTag = wrapper.find(`li.${cityListItem}`)

    expect(liTag).toExist()
    expect(liTag.props().style.backgroundImage).toBe(`url(${props.photoUrl})`)
  })

  it('should render a <label> tag with a class name of "cityListItemLabel"', () => {
    const labelTag = wrapper.find(`label.${cityListItemLabel}`)

    expect(labelTag).toExist()
  })

  it("should render an <img> tag with the correct src and alt properties", () => {
    const imgTag = wrapper.find(`img.${mapMarkerIcon}`)

    expect(imgTag).toExist()
    expect(imgTag.props().src).toBe(mapMarkerIconProps.src)
    expect(imgTag.props().alt).toBe(mapMarkerIconProps.alt)
  })

  it("should render the correct city name text", () => {
    expect(wrapper.text()).toContain(props.name)
  })
})
