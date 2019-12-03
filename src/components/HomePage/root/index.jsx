import React from "react"

import { appName } from "../../../constants/text"

import SEO from "../../seo"

const HomePage = () => (
  <>
    <SEO title={appName} />
    {appName}
  </>
)

export default HomePage
