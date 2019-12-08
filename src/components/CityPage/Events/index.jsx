import React from "react"

import { events, eventsHeader } from "./styles.module.css"

import Card from "components/UI/Card"

export const text = {
  header: "Upcoming Event",
  eventName: "Empowerment",
  cardWidth: "23rem",
  cardHeight: "28rem",
  cardMarginTop: "5rem",
  logoSrc:
    "https://practice-makes-production.s3.amazonaws.com/UI/logo-city.png",
}

const Events = ({ events }) => {
  const {
    eventName,
    cardWidth: width,
    cardHeight: height,
    cardMarginTop: marginTop,
  } = text
  const upcomingEvent = events.find(event => event.name === eventName)

  const baseProps = {
    cardProps: {
      width,
      height,
      marginTop,
      isHoverable: false,
      src: upcomingEvent.photoUrl,
      alt: upcomingEvent.name,
    },
  }

  return <BaseEvents {...baseProps} />
}

const BaseEvents = ({ cardProps }) => (
  <section className={events}>
    <span className={eventsHeader}>{text.header}</span>
    <Card {...cardProps} />
  </section>
)

export default Events
