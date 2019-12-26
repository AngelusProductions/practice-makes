import React from "react"
import { BrowserRouter } from "react-router-dom"
import { cleanup } from "@testing-library/react"
import { mount } from "enzyme"
import "jest-enzyme"

import { cities } from "constants/data"
import { cityList } from "./styles.module.css"

import CityList from "."
import CityListItem from "../CityListItem"

afterEach(cleanup)

describe("CityList Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <CityList />
      </BrowserRouter>
    )
  })

  it("should render the CityList component", () => {
    const cityListComponent = wrapper.find(CityList)

    expect(cityListComponent).toExist()
  })

  it("should mount the CityListItem components", () => {
    const cityListItemComponents = wrapper.find(CityListItem)

    expect(cityListItemComponents).toExist()
    expect(cityListItemComponents.length).toBe(cities.length)
  })

  it("should pass the CityListItem components the name, linkUrl and photoUrl props", () => {
    const cityListItemComponents = wrapper.find(CityListItem)

    cityListItemComponents.forEach(cityListItemComponent => {
      expect(cityListItemComponent.props().name).toBeDefined()
      expect(cityListItemComponent.props().linkUrl).toBeDefined()
      expect(cityListItemComponent.props().photoUrl).toBeDefined()
    })
  })

  it('should render a <ul> tag with a class name of "cityList"', () => {
    const ulTag = wrapper.find(`ul.${cityList}`)

    expect(ulTag).toExist()
  })
})
