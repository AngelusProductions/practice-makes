import React from "react"

import { cityPageHashItems } from "constants/text"
import { welcome, welcomeHeader, cityscapeTop } from "./styles.module.css"

import Logo from "components/UI/Logo"
import NavMenu from "components/UI/NavMenu"

export const text = {
  header: "Welcome to",
  logoWidth: "6rem",
  logoSrc:
    "https://practice-makes-production.s3.amazonaws.com/UI/logo-city.png",
}

const Welcome = ({ name, assets }) => (
  <main className={welcome}>
    <Logo src={text.logoSrc} width={text.logoWidth} />
    <NavMenu items={cityPageHashItems} />
    <span className={welcomeHeader}>{text.header}</span>
    <img className={cityscapeTop} src={assets.skyline.top} alt={name} />
  </main>
)

export default Welcome
