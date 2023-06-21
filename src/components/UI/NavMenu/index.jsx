import React from "react"
import * as s from "./styles.module.css"

import { rootPath } from "constants/paths"

import NavItem from "../NavItem"
import { cityPageHashItems } from "../../../constants/text"

const NavMenu = ({ pathname }) => {
  const className = pathname === rootPath ? s.navMenuHome : s.navMenuCity
  const hashItems = cityPageHashItems.slice(1).reverse()
  return (
    <nav className={className}>
      {hashItems.map((item, index, items) => {
        const isNotLastItem = index !== items.length - 1
        return <NavItem {...item} isNotLastItem={isNotLastItem} key={index} pathname={pathname}/>
      })}
    </nav>
  )
}

export default NavMenu
