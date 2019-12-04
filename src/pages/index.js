import React from "react"

import SEO from "components/seo"
import HomePage from "components/HomePage/root"

export const text = {
  title: "Home Page",
}

const Index = () => (
  <>
    <SEO title={text.title} />
    <HomePage />
  </>
)

export default Index
