import React from "react"
import * as s from "./styles.module.css"

import { cities } from "constants/data"

import CityListItem from "../CityListItem"

const CityList = () => (
  <ul className={s.cityList}>
    {cities.map(city => (
      <CityListItem {...city} key={city.name} />
    ))}
  </ul>
)

export default CityList
