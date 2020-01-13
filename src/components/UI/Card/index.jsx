import React, { useState } from "react"
import * as s from "./styles.module.css"

export const text = {
  remRegex: /^[a-zA-Z]+$/g,
  whiteWidthOffset: 0.5,
  whiteHeightOffset: 0.5,
  whiteTopOffset: 0.7,
  detailsWidthOffset: 4,
  blackTopWidthOffset: 1,
}

export const toRem = (property, offset) =>
  `${parseFloat(property.replace(text.remRegex, "")) - offset}rem`

const Card = ({
  photoUrl,
  alt,
  width,
  height,
  marginTop,
  isHoverable,
  title,
  details,
  additionalStyles,
  sideLabel
}) => {
  const [isHovering, setIsHovering] = useState(false)
  const showHoverState = isHoverable && isHovering && details

  const contentStyles = { width, height, marginTop }
  const borderWhiteWidth = toRem(width, text.whiteWidthOffset)
  const borderWhiteHeight = toRem(height, text.whiteHeightOffset)
  const borderWhiteTop = toRem(marginTop, text.whiteTopOffset)
  const borderBlackTop = toRem(marginTop, text.blackTopWidthOffset)
  const cardStyles = additionalStyles || {}
  const detailsStyles = {
    marginTop,
    width: toRem(width, text.detailsWidthOffset),
  }
  return (
    <div
      className={s.card}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={cardStyles}
    >
      {showHoverState ? (
        <div className={s.detailsWrapper} style={contentStyles}>
          {title && <h2 className={s.detailsHeader}>{title}</h2>}
          <div className={s.detailsBody} style={detailsStyles}>
            {details}
          </div>
        </div>
      ) : (
        <img
          src={photoUrl}
          alt={alt}
          className={s.card}
          style={contentStyles}
        />
      )}
      <div
        className={s.borderWhite}
        style={{
          width: borderWhiteWidth,
          height: borderWhiteHeight,
          top: borderWhiteTop,
        }}
      />
      <div
        className={s.borderBlack}
        style={{ width, height, top: borderBlackTop }}
      />
      {sideLabel}
    </div>
  )
}

export default Card
