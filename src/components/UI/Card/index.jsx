import React, { useState } from "react"

import { card, details } from "./styles.module.css"

const Card = ({ src, height, width, borderColor, details }) => {
  const [isHovering, toggleIsHovering] = useState(false)
  const onHover = () => toggleIsHovering(!isHovering)
  const oncardClick = () => history.push(rootPath)
  const className = pathname === rootPath ? cardHome : cardCity
  return isHovering ? (
    <p className={details}>{details}</p>
  ) : (
    <img
      src={src}
      alt={appName}
      style={{ height, width, borderColor }}
      className={card}
      onHover={onHover}
      onClick={oncardClick}
    />
  )
}

export default Card
