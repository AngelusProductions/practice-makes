import React from "react"
import { withRouter } from "react-router-dom"

import { mapMarkerIconProps } from "constants/text"
import {
  cityListItem,
  cityListItemLabel,
  mapMarkerIcon,
} from "./styles.module.css"

const CityListItem = ({ name, linkUrl, photoUrl, history }) => {
  const onCityListItemClick = () => history.push(linkUrl)
  const backgroundImage = `url(${photoUrl})`
  return (
    <li
      className={cityListItem}
      onClick={onCityListItemClick}
      style={{ backgroundImage }}
    >
      <label className={cityListItemLabel}>
        <img
          src={mapMarkerIconProps.src}
          alt={mapMarkerIconProps.alt}
          className={mapMarkerIcon}
        />
        {name}
      </label>
    </li>
  )
}

export default withRouter(CityListItem)
