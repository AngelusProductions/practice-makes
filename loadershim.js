import Adapter from "enzyme-adapter-react-16"
import { cleanup } from "@testing-library/react"
import { configure, shallow, render, mount } from "enzyme"

configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount

global.cleanup = cleanup

global.___loader = {
  enqueue: jest.fn(),
}
