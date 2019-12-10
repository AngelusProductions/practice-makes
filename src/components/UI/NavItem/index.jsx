import React from "react"
import { withRouter } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

import { rootPath } from "constants/paths"
import { navItem, dashIcon } from "./styles.module.css"

export const text = {
  black: "#222222",
  white: "white",
  short: "2px",
  tall: "4px",
}

const NavItem = ({ name, url, isNotLastItem, location: { pathname } }) => {
  const backgroundColor = pathname === rootPath ? text.black : text.white
  const width = pathname === rootPath ? text.short : text.tall
  return (
    <>
      <Link to={url} key={name} className={navItem}>
        {name}
      </Link>
      {isNotLastItem && (
        <div className={dashIcon} style={{ backgroundColor, width }} />
      )}
    </>
  )
}

export default withRouter(NavItem)
