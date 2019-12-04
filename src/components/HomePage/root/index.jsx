import React from "react"

import { appName } from "constants/text"

import SEO from "components/seo"

export const text = {
  title: "Home Page",
}

const HomePage = () => (
  <>
    <SEO title={text.title} />
    <p>{appName}</p>
  </>
)

export default HomePage
