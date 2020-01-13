import React from "react"
import * as s from "./styles.module.css"

import { appName, cityPageHashItems } from "constants/text"
import { toShortDate } from "constants/utils"

import Card from "components/UI/Card"
import HashMenu from "components/UI/HashMenu"

export const text = {
  title: "About",
  eventName: "Process",
  altCardProps: {
    width: "30.30rem",
    height: "30.30rem",
    marginTop: "0",
  },
  altCardStyles: {
    left: "24.6rem",
    top: "19rem",
    height: "fit-content",
  },
  processCardProps: {
    width: "15rem",
    height: "15rem",
    marginTop: "0",
  },
  processCardStyles: {
    left: "19.4rem",
    top: "14.4rem",
    zIndex: "1",
  },
  bottomCardProps: {
    width: "29rem",
    height: "19.4rem",
    marginTop: "0",
  },
  bottomCardStyles: {
    left: "-14.6rem",
    top: "44rem",
  },
  hashMenuTop: "33rem",
}

const About = ({ name, about, events, assets }) => {
  const headerText = `${appName} in ${name}`
  const event = events.find(e => e.name === text.eventName)
  const sideLabelText = `${appName.split(" ")[0]}  ${
    appName.split(" ")[1]
  }  :      ${event.name}  -  ${toShortDate(event.date).slice(0, 4)}   06`
  return (
    <section id={text.title} className={s.about}>
      <h1 className={s.aboutTitle}>{text.title}</h1>
      <img
        className={s.cityscapeBottom}
        src={assets.skyline.bottom}
        alt={name}
      />
      <img className={s.cityscapeWaves} src={assets.skyline.waves} alt={name} />
      <div className={s.aboutInfo}>
        <h3 className={s.aboutHeader}>{headerText}</h3>
        <p className={s.aboutBody}>{about}</p>
      </div>
      <div className={s.topCard}>
        <img
          src={assets.about.process}
          alt={appName}
          className={s.topImage}
        />
        <div className={s.topBorder}/>
      </div>

      <div className={s.bottomCard}>
        <img
          src={assets.about.alt}
          alt={appName}
          className={s.bottomImage}
        />
        <div className={s.bottomBorder}/>
      </div>

      <div className={s.leftCard}>
        <img
          src={assets.about.bottom}
          alt={appName}
          className={s.leftImage}
        />
        <div className={s.leftBorder}/>
      </div>
      <span className={s.sideLabel}>{sideLabelText}</span>
      <HashMenu
        sectionTitle={text.title}
        items={cityPageHashItems}
        top={text.hashMenuTop}
      />
    </section>
  )
}

export default About
