import React from "react"

import {
  events,
  eventsHeader,
  eventInfo,
  eventInfoSubtitle,
  eventInfoDescription,
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
  const upcomingEvent = events.find(event => event.name === upcomingEventName)
  const baseProps = {
    cardProps: {
      width,
      height,
      marginTop,
      alt: upcomingEventName,
      isHoverable: false,
      photoUrl: upcomingEvent.photoUrl,
    },
    ...upcomingEvent,
  }

  return <BaseEvents {...baseProps} />
}

const BaseEvents = ({ cardProps, subtitle, description }) => (
  <section className={events}>
    <span className={eventsHeader}>{text.header}</span>
    <Card {...cardProps} />
    <div className={eventInfo} style={{ marginTop: cardProps.marginTop }}>
      <span className={eventInfoSubtitle}>{subtitle}</span>
      <span className={eventInfoDescription}>{description}</span>
      {/* <span className={eventsHeader}>{text.header}</span>
      <span className={eventsHeader}>{text.header}</span> */}
    </div>
  </section>
)

export default Events
