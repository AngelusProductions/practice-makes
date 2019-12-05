import React from "react"
import { withRouter } from "react-router-dom"

import { rootPath } from "constants/paths"
import { navMenuHome, navMenuDefault } from "./styles.module.css"

import NavItem from "../NavItem"

const NavMenu = ({ items, location }) => {
  const className =
    location.pathname === rootPath ? navMenuHome : navMenuDefault
  return (
    <nav className={className}>
      {items.map((item, index, items) => {
        const isNotLastItem = index !== items.length - 1
        return <NavItem {...item} isNotLastItem={isNotLastItem} key={index} />
      })}
    </nav>
  )
}

export default withRouter(NavMenu)
