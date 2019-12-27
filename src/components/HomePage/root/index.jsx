import React from "react"
import * as s from "./styles.module.css"

import { homePageNavItems } from "constants/text"

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

const HomePage = ({ location: { pathname }}) => {
  debugger
  return(
  <main className={s.homePage}>
    <SEO title={text.title} />
    <Logo src={text.logoSrc} width={text.logoWidth} pathname={pathname}/>
    <Tagline />
    <NavMenu items={homePageNavItems} pathname={pathname} />
    <CityList /> 
  </main>
)}

export default HomePage
