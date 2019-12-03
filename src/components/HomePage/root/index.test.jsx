import React from "react"
import { cleanup } from "@testing-library/react"
import { mount } from "enzyme"
import "jest-enzyme"

import HomePage from "."

afterEach(cleanup)

describe("HomePage Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<HomePage />)
  })

  it("should render the HomePage component", () => {
    const homePageComponent = wrapper.find(HomePage)

    expect(homePageComponent).toExist()
  })
})
