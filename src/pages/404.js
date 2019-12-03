import React from "react"

import SEO from "../components/seo"

const text = {
  pageNotFound: "You just hit a route that doesn't exist... the sadness.",
}

const PageNotFound = () => (
  <>
    <SEO title={text.pageNotFound} />
    {text.pageNotFound}
  </>
)

export default PageNotFound
