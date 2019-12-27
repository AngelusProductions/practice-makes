import React from "react"
import { navigate } from "@reach/router"
import * as s from "./styles.module.css"

import { mapMarkerIconProps } from "constants/text"

const CityListItem = ({ name, linkUrl, photoUrl }) => {
  const onCityListItemClick = () => navigate(linkUrl)
  const backgroundImage = `url(${photoUrl})`
  return (
    <li
      className={s.cityListItem}
      onClick={onCityListItemClick}
      style={{ backgroundImage }}
    >
      <label className={s.cityListItemLabel}>
        <img
          src={mapMarkerIconProps.src}
          alt={mapMarkerIconProps.alt}
          className={s.mapMarkerIcon}
        />
        {name}
      </label>
    </li>
  )
}

export default CityListItem
