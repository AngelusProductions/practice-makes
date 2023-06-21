import React from "react"
import * as s from "./styles.module.css"

import Logo from "components/UI/Logo"
import NavMenu from "components/UI/NavMenu"

export const t = {
  title: "Welcome",
  header: "Welcome to",
  events: "Events",
  eventsNavText: "Events & Tickets",
  logoWidth: "6rem",
  logoSrc:
    "https://practice-makes-production.s3.amazonaws.com/UI/logo-city.png",
}

const Welcome = ({ name, assets, pathname }) => {
  return (
    <section id='welcomeSection' name={t.title} className={s.welcome}>
      <Logo src={t.logoSrc} width={t.logoWidth} pathname={pathname} />
      <NavMenu pathname={pathname} />
      <span className={s.welcomeHeader}>{t.header}</span>
      <img className={s.cityscapeTop} src={assets.skyline.top} alt={name} />
    </section>
  )
}

export default Welcome
