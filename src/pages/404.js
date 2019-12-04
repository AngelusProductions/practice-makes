import React from "react"

import SEO from "components/seo"

export const text = {
  pageNotFound: "You just hit a route that doesn't exist... the sadness.",
  title: "404: Not found",
}

const PageNotFound = () => (
  <>
    <SEO title={text.title} />
    <p>{text.pageNotFound}</p>
  </>
)

export default PageNotFound
