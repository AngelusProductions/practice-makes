import React from "react"

import { homePageNavItems } from "constants/text"
import { homePage } from "./styles.module.css"

import SEO from "components/seo"
import Logo from "components/UI/Logo"
import Tagline from "../Tagline"
import NavMenu from "components/UI/NavMenu"
import CityList from "../CityList"

export const text = {
  title: "Home Page",
  logoWidth: "10rem",
  logoSrc:
    "https://practice-makes-production.s3.amazonaws.com/UI/logo-home.png",
}

const HomePage = () => (
  <main className={homePage}>
    <SEO title={text.title} />
    <Logo src={text.logoSrc} width={text.logoWidth} />
    <Tagline />
    <NavMenu items={homePageNavItems} />
    <CityList />
  </main>
)

export default HomePage
