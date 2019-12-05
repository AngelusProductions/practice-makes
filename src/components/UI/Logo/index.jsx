import React from "react"
import { withRouter } from "react-router-dom"

import { logo } from "./styles.module.css"

import { appName } from "constants/text"
import { rootPath } from "constants/paths"

const Logo = ({ src, width, history }) => {
  const onLogoClick = () => history.push(rootPath)
  return (
    <img
      src={src}
      alt={appName}
      style={{ width }}
      className={logo}
      onClick={onLogoClick}
    />
  )
}

export default withRouter(Logo)
