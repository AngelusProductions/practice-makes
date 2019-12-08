import React from "react"

import { toShortString } from "constants/dates"
import {
  events,
  eventsHeader,
  eventInfo,
  eventInfoSubtitle,
  eventInfoDescription,
  eventInfoDate,
} from "./styles.module.css"

import Card from "components/UI/Card"

export const text = {
  header: "Upcoming Event",
  upcomingEventName: "Empowerment",
  cardWidth: "29rem",
  cardHeight: "36.8rem",
  cardMarginTop: "5rem",
  logoSrc:
    "https://practice-makes-production.s3.amazonaws.com/UI/logo-city.png",
}

const Events = ({ events }) => {
  const {
    upcomingEventName,
    cardWidth: width,
    cardHeight: height,
    cardMarginTop: marginTop,
  } = text

  const upcomingEvent = events.find(event => event.name === upcomingEventName),
    { name, date, photoUrl } = upcomingEvent

  const baseProps = {
    cardProps: {
      width,
      height,
      marginTop,
      photoUrl,
      alt: name,
      isHoverable: false,
    },
    dateText: toShortString(date),
    ...upcomingEvent,
  }

  return <BaseEvents {...baseProps} />
}

const BaseEvents = ({ cardProps, subtitle, description, dateText }) => (
  <section className={events}>
    <span className={eventsHeader}>{text.header}</span>
    <Card {...cardProps} />
    <div className={eventInfo} style={{ marginTop: cardProps.marginTop }}>
      <span className={eventInfoSubtitle}>{subtitle}</span>
      <span className={eventInfoDescription}>{description}</span>
      <span className={eventInfoDate}>{dateText}</span>
      {/* <span className={eventsHeader}>{text.header}</span> */}
    </div>
  </section>
)

export default Events
