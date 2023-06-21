import React from "react"
import * as s from "./styles.module.css"

import { appName } from "constants/text"
import { toShortDate } from "constants/utils"

import HashMenu from "components/UI/HashMenu"

export const t = {
  title: "About",
  eventName: "Process",
  hashMenuTop: "50rem",
}

const About = ({ name, about, events, assets }) => {
  const headerText = `${appName} in ${name}`
  const event = events.find(e => e.name === t.eventName)
  const sideLabelText = `${appName.split(" ")[0]}  ${
    appName.split(" ")[1]
  }  :      ${event.name}  -  ${toShortDate(event.date).slice(0, 4)}   06`
  return (
    <section id='aboutSection' name={t.title} className={s.about}>
      <h1 className={s.aboutTitle}>{t.title}</h1>
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
        sectionId={t.title.toLowerCase()}
        top={t.hashMenuTop}
      />
    </section>
  )
}

export default About
