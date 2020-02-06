import React, { useState } from "react"
import { navigate } from "@reach/router"
import * as s from "./styles.module.css"

import { mapMarkerIconProps } from "constants/text"

const t = {
  comingSoon: 'Coming Soon!'
}

const CityListItem = ({ name, linkUrl, photoUrl }) => {
  const [isHovering, setIsHovering] = useState(false)
  const onCityListItemClick = () => name === 'Boston' && navigate(linkUrl)
  const styles = {
    backgroundImage: `url(${photoUrl})`,
    filter: isHovering && name === 'Houston' ? 'opacity(0.2)' : 'none'
  }
  return (
    <>
      <li
        className={s.cityListItem}
        onClick={onCityListItemClick}
        style={styles}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
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
      {isHovering && name === 'Houston' && (
        <div className={s.comingSoon} onMouseEnter={() => setIsHovering(true)}>
          {t.comingSoon}
        </div>
      )}
    </>
  )
}

export default CityListItem
