import React from "react"

import { cities } from "constants/data"

const CityPage = () => <div>{cities[0].events.map(event => <img src={event.photoUrl})}</div>

export default CityPage
