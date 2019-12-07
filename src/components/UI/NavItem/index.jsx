import React from "react"
import { withRouter, Link } from "react-router-dom"

import { rootPath } from "constants/paths"
import { dashIcon } from "./styles.module.css"

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
      <Link to={url} key={name}>
        {name}
      </Link>
      {isNotLastItem && (
        <div className={dashIcon} style={{ backgroundColor, width }} />
      )}
    </>
  )
}

export default withRouter(NavItem)
