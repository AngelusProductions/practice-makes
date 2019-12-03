import React from "react"
import { cleanup } from "@testing-library/react"
import { mount } from "enzyme"
import "jest-enzyme"

import Index from ".."
import HomePage from "components/HomePage/root"

afterEach(cleanup)

describe("Index Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Index />)
  })

  it("should render the Index component", () => {
    const index = wrapper.find(Index)

    expect(index).toExist()
  })

  it("should render the HomePage component", () => {
    const homePage = wrapper.find(HomePage)

    expect(homePage).toExist()
  })
})
