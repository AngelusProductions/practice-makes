import React, { useState } from "react"

import {
  card,
  detailsClass,
  borderWhite,
  borderBlack,
} from "./styles.module.css"

export const text = {
  regex: /^[a-zA-Z]+$/g,
  whiteWidthOffset: 0.5,
  whiteHeightOffset: 0.5,
  whiteTopOffset: 0.7,
  blackTopWidthOffset: 1,
}

export const toRem = (property, offset) =>
  `${parseFloat(property.replace(text.regex, "")) - offset}rem`

const Card = ({ src, alt, width, height, marginTop, isHoverable, details }) => {
  const [isHovering, setIsHovering] = useState(false)
  const contentStyles = { width, height, marginTop }

  const borderWhiteWidth = toRem(width, text.whiteWidthOffset)
  const borderWhiteHeight = toRem(height, text.whiteHeightOffset)
  const borderWhiteTop = toRem(marginTop, text.whiteTopOffset)
  const borderBlackTop = toRem(marginTop, text.blackTopWidthOffset)
  return (
    <div
      className={card}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHoverable && isHovering ? (
        <p className={detailsClass} style={contentStyles}>
          {details}
        </p>
      ) : (
        <img src={src} alt={alt} className={card} style={contentStyles} />
      )}
      <div
        className={borderWhite}
        style={{
          width: borderWhiteWidth,
          height: borderWhiteHeight,
          top: borderWhiteTop,
        }}
      />
      <div
        className={borderBlack}
        style={{ width, height, top: borderBlackTop }}
      />
    </div>
  )
}

export default Card
