import React from "react"

import { cities } from "constants/data"
import { cityList } from "./styles.module.css"

import CityListItem from "../CityListItem"

const CityList = () => (
  <ul className={cityList}>
    {cities.map(city => (
      <CityListItem {...city} key={city.name} />
    ))}
  </ul>
)

export default CityList
