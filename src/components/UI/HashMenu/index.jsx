import React from "react"
import { withRouter } from "react-router-dom"
import * as s from "./styles.module.css"

import HashItem from "../HashItem"

export const text = {
  eventsAndTickets: "Events & Tickets",
}

const HashMenu = ({ items, sectionTitle, top }) => {
  let hashItems = items.map(({ name, url }) => {
    if (name === text.eventsAndTickets) name = name.split(" ")[0]
    return { name, url }
  })
  hashItems.shift()
  hashItems.reverse()
  return (
    <nav className={s.hashMenu} style={{ top }}>
      {hashItems.map(item => (
        <HashItem item={item} sectionTitle={sectionTitle} key={item.name} />
      ))}
    </nav>
  )
}

export default withRouter(HashMenu)
