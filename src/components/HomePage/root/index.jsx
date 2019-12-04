import React from "react"

import { appName } from "constants/text"

import SEO from "components/seo"

const HomePage = () => (
  <>
    <SEO title={appName} />
    <p>{appName}</p>
  </>
)

export default HomePage
