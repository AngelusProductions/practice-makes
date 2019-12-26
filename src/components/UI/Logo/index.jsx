import React from "react"
import { withRouter } from "react-router-dom"
import * as s from "./styles.module.css"

import { appName } from "constants/text"
import { rootPath } from "constants/paths"

const Logo = ({ src, width, history, location: { pathname } }) => {
  const onLogoClick = () => history.push(rootPath)
  const className = pathname === rootPath ? s.logoHome : s.logoCity
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
