import React from "react"
import { withRouter } from "react-router-dom"

import { logoHome, logoCity } from "./styles.module.css"

import { appName } from "constants/text"
import { rootPath } from "constants/paths"

const Logo = ({ src, width, history, location: { pathname } }) => {
  const onLogoClick = () => history.push(rootPath)
  const className = pathname === rootPath ? logoHome : logoCity
  return (
    <img
      src={src}
      alt={appName}
      style={{ width }}
      className={className}
      onClick={onLogoClick}
    />
  )
}

export default withRouter(Logo)
