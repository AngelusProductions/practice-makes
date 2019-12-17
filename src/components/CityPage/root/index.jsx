import React from "react"
import { withRouter } from "react-router-dom"

import { cities } from "constants/data"
import { cityPage } from "./styles.module.css"

import Welcome from "../Welcome"
import Events from "../Events"
import ComingSoon from "../ComingSoon"

const CityPage = ({
  match: {
    params: { cityName },
  },
}) => {
  const city = cities.find(city => city.name.toLowerCase() === cityName)
  return (
    <main className={cityPage}>
      <Welcome {...city} />
      <Events {...city} />
      <ComingSoon />
    </main>
  )
}

export default withRouter(CityPage)
