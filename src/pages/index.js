import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import { rootPath, cityPath } from "constants/paths"
import "./styles.module.css"

import HomePage from "components/HomePage/root"
import CityPage from "../components/CityPage/root"

const Index = () => (
  <BrowserRouter>
    <Route exact path={rootPath} component={HomePage} />
    <Route path={cityPath} component={CityPage} />
  </BrowserRouter>
)

export default Index
