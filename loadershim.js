import { configure } from "enzyme"
import { cleanup } from "@testing-library/react"
import { shallow, render, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount

global.cleanup = cleanup

global.___loader = {
  enqueue: jest.fn(),
}
