import React from "react"
import { Link } from "@reach/router"

import * as s from "./styles.module.css"

import { rootPath } from "constants/paths"

export const text = {
  black: "#222222",
  white: "white",
  short: "2px",
  tall: "4px",
}

const NavItem = ({ name, url, isNotLastItem, pathname }) => {
  const backgroundColor = pathname === rootPath ? text.black : text.white
  const width = pathname === rootPath ? text.short : text.tall
  return (
    <>
      <Link to={url} key={name} className={s.navItem}>
        {name}
      </Link>
      {isNotLastItem && (
        <div className={s.dashIcon} style={{ backgroundColor, width }} />
      )}
    </>
  )
}

export default NavItem