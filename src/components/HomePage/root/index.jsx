import React from "react"

import { homePage } from "./styles.module.css"

import SEO from "components/seo"
import Logo from "components/Logo"
import TagLine from "../TagLine"

export const text = {
  title: "Home Page",
  logoWidth: "9.7vw",
  logoSrc: "https://practice-makes-production.s3.amazonaws.com/logo-home.png",
}

const HomePage = () => (
  <div className={homePage}>
    <SEO title={text.title} />
    <Logo src={text.logoSrc} width={text.logoWidth} />
    <TagLine />
  </div>
)

export default HomePage
