import React from "react"
import { withRouter } from "react-router-dom"
import * as s from "./styles.module.css"

import { rootPath } from "constants/paths"

import NavItem from "../NavItem"

const NavMenu = ({ items, location }) => {
  const className =
    location.pathname === rootPath ? s.navMenuHome : s.navMenuCity
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
