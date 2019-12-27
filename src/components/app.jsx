import React from "react"
import { Router } from '@reach/router'

import { rootPath, cityPath } from "constants/paths"

import HomePage from "components/HomePage/root"
import CityPage from "../components/CityPage/root"

const App = () => (
  <Router>
    <HomePage path={rootPath}/>
    <CityPage path={cityPath}/>
  </Router>
)

export default App
