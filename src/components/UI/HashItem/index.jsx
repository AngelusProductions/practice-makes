import React, { useState } from "react"
import * as s from "./styles.module.css"

const HashItem = ({ item, sectionTitle }) => {
  const [isHovering, setIsHovering] = useState(false)
  return isHovering || item.name === sectionTitle ? (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
      key={item.name}
    />
  )
}

export default HashItem
