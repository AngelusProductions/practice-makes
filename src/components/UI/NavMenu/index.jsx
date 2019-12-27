import React from "react"
import * as s from "./styles.module.css"

import { rootPath } from "constants/paths"

import NavItem from "../NavItem"

const NavMenu = ({ items, pathname }) => {
  const className = pathname === rootPath ? s.navMenuHome : s.navMenuCity
  return (
    <nav className={className}>
      {items.map((item, index, items) => {
        const isNotLastItem = index !== items.length - 1
        return <NavItem {...item} isNotLastItem={isNotLastItem} key={index} pathname={pathname}/>
      })}
    </nav>
  )
}

export default NavMenu
