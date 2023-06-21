import React, { useState } from "react"
import * as s from "./styles.module.css"

import { scroller } from 'react-scroll'

const HashItem = ({ item, sectionId, isInverted }) => {
  const [isHovering, setIsHovering] = useState(false)
  const onItemClick = e => {
    scroller.scrollTo(`${e.target.id}Section`, {
      duration: 1000,
      delay: 50,
      smooth: 'easeInOutQuint'
    })
  }
  const itemStyles = {
    color: isInverted ? '#222222' : 'white',
    backgroundColor: isInverted ? 'white' : '#222222'
  }
  const markerStyles = {
    borderLeftColor: isInverted ? 'white' : '#222222'
  }
  return isHovering || item.id === sectionId ? (
    <span
      id={item.id}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onItemClick}
      style={itemStyles}
      className={s.hashItem}
      key={item.name}
    >
      {item.name}
    </span>
  ) : (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={s.hashMarker}
      style={markerStyles}
      key={item.name}
    />
  )
}

export default HashItem
