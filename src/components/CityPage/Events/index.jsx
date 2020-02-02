import React from "react"
import * as s from "./styles.module.css"

import { cityPageHashItems } from "constants/text"
import { toShortDate } from "constants/utils"

import HashMenu from "components/UI/HashMenu"

export const t = {
  title: "Events",
  header: "Upcoming Event",
  upcomingEventName: "Empowerment",
  getTickets: "Get Tickets",
  hashMenuTop: "49rem",
  logoSrc:
    "https://practice-makes-production.s3.amazonaws.com/UI/logo-city.png",
}

const Events = ({ events }) => {
  const upcomingEvent = events.find(e => e.name === t.upcomingEventName),
    { photoUrl, name, date } = upcomingEvent

  const baseProps = {
    name,
    photoUrl,
    dateText: toShortDate(date),
    ...upcomingEvent,
  }

  return <BaseEvents {...baseProps} />
}

const BaseEvents = ({
  photoUrl,
  name,
  subtitle,
  description,
  addressTop,
  addressBottom,
  linkUrl,
  dateText,
}) => (
  <section id={t.title} name={t.title} className={s.events}>
    <h1 className={s.eventsHeader}>{t.header}</h1>
    <img src={photoUrl} alt={name} className={s.eventsImage} />
    <div className={s.eventsBorder} />
    <div className={s.eventInfo}>
      <h2 className={s.eventInfoSubtitle}>{subtitle}</h2>
      <p className={s.eventInfoDescription}>{description}</p>
      <p className={s.eventInfoDate}>{dateText}</p>
      <span className={s.eventInfoAddress}>
        {addressTop},
        <br />
        {addressBottom}
      </span>
      <a href={linkUrl} className={s.eventInfoTickets}>
        {t.getTickets}
      </a>
    </div>
    <HashMenu
      sectionTitle={t.title}
      items={cityPageHashItems}
      top={t.hashMenuTop}
    />
  </section>
)

export default Events
