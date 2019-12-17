import React from "react"
import { withRouter } from "react-router-dom"

import { hashMenu } from "./styles.module.css"

import HashMenuItem from "../HashItem"

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
      {hashItems.map(item => (
        <HashMenuItem item={item} sectionTitle={sectionTitle} key={item.name} />
      ))}
    </nav>
  )
}

export default withRouter(HashMenu)
