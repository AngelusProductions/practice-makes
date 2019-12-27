import React from "react"
import * as s from "./styles.module.css"

import { cityPageHashItems } from "constants/text"

import Logo from "components/UI/Logo"
import NavMenu from "components/UI/NavMenu"

export const text = {
  title: "Welcome",
  header: "Welcome to",
  events: "Events",
  eventsNavText: "Events & Tickets",
  logoWidth: "6rem",
  logoSrc:
    "https://practice-makes-production.s3.amazonaws.com/UI/logo-city.png",
}

const Welcome = ({ name, assets, pathname }) => {
  const hashItems = cityPageHashItems.map(item => {
    if (item.name === text.events) item.name = text.eventsNavText
    return item
  })
  return (
    <section id={text.title} className={s.welcome}>
      <Logo src={text.logoSrc} width={text.logoWidth} pathname={pathname} />
      <NavMenu items={hashItems} pathname={pathname} />
      <span className={s.welcomeHeader}>{text.header}</span>
      <img className={s.cityscapeTop} src={assets.skyline.top} alt={name} />
    </section>
  )
}

export default Welcome
