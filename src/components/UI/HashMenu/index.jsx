import React from "react"
import * as s from "./styles.module.css"

import HashItem from "../HashItem"
import { cityPageHashItems } from "../../../constants/text"

const HashMenu = ({ sectionId, top }) => {
  const isInverted = ['about', 'contact'].includes(sectionId)
  return (
    <nav className={s.hashMenu} style={{ top }}>
      {cityPageHashItems.map(item => (
        <HashItem item={item} sectionId={sectionId} isInverted={isInverted} key={item.name} />
      ))}
    </nav>
  )
}

export default HashMenu
