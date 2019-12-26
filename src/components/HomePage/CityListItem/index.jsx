import React from "react"
import { withRouter } from "react-router-dom"
import * as s from "./styles.module.css"

import { mapMarkerIconProps } from "constants/text"

const CityListItem = ({ name, linkUrl, photoUrl, history }) => {
  const onCityListItemClick = () => history.push(linkUrl)
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

export default withRouter(CityListItem)
