import React from "react"
import { withRouter, Link } from "react-router-dom"

import { rootPath } from "constants/paths"
import { dashIcon } from "./styles.module.css"

const NavItem = ({ name, url, isNotLastItem, location }) => {
  const isHomePage = location.pathname === rootPath
  return (
    <>
      <Link to={url} key={name}>
        {name}
      </Link>
      {isHomePage && isNotLastItem && <div className={dashIcon} />}
    </>
  )
}

export default withRouter(NavItem)
