import React, { useState } from "react"
import { withRouter } from "react-router-dom"

import { hashItem, hashMarker } from "./styles.module.css"

const HashItem = ({ item, sectionTitle }) => {
  const [isHovering, setIsHovering] = useState(false)
  return isHovering || item.name === sectionTitle ? (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={hashItem}
      key={item.name}
    >
      {item.name}
    </span>
  ) : (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={hashMarker}
      key={item.name}
    />
  )
}

export default withRouter(HashItem)
