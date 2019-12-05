import React from "react"
import { Link } from "react-router-dom"

import { dashIcon } from "./styles.module.css"

const NavItem = ({ name, url, isNotLastItem }) => (
  <>
    <Link to={url} key={name}>
      {name}
    </Link>
    {isNotLastItem && <div className={dashIcon} />}
  </>
)

export default NavItem
