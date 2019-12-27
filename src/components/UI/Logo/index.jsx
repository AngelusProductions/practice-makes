import React from "react"
import { navigate } from "@reach/router"

import * as s from "./styles.module.css"

import { appName } from "constants/text"
import { rootPath } from "constants/paths"

const Logo = ({ src, width, pathname }) => {
  const className = pathname === rootPath ? s.logoHome : s.logoCity
  return (
    <img
      src={src}
      alt={appName}
      style={{ width }}
      className={className}
      onClick={() => navigate(rootPath)}
    />
  )
}

export default Logo
