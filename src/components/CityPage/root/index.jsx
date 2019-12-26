import React from "react"
import { withRouter } from "react-router-dom"
import * as s from "./styles.module.css"

import { cities } from "constants/data"

import Welcome from "../Welcome"
import Events from "../Events"
import ComingSoon from "../ComingSoon"
import Archives from "../Archives/root"
import About from "../About"
import Team from "../Team/root"
import Contact from "../Contact"

const CityPage = ({
  match: {
    params: { cityName },
  },
}) => {
  const city = cities.find(city => city.name.toLowerCase() === cityName)
  return (
    <main className={s.cityPage}>
      <Welcome {...city} />
      <Events {...city} />
      <ComingSoon />
      <Archives {...city} />
      <About {...city} />
      <Team {...city} />
      <Contact {...city} />
    </main>
  )
}

export default withRouter(CityPage)
