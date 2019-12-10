import React from "react"
import { withRouter } from "react-router-dom"

import { hashMenu, hashItem, hashMarker } from "./styles.module.css"

export const text = {
  eventsAndTickets: "Events & Tickets",
}

const HashMenu = ({ items, sectionTitle }) => {
  let hashItems = items.map(({ name, url }) => {
    if (name === text.eventsAndTickets) name = name.split(" ")[0]
    return { name, url }
  })
  hashItems.shift()
  hashItems.reverse()
  return (
    <nav className={hashMenu}>
      {hashItems.map(item => {
        return item.name === sectionTitle ? (
          <span className={hashItem} key={item.name}>
            {item.name}
          </span>
        ) : (
          <span className={hashMarker} key={item.name} />
        )
      })}
    </nav>
  )
}

export default withRouter(HashMenu)
