import React from "react"

import { cityPageHashItems } from "constants/text"
import { toShortDate } from "constants/utils"
import {
  events,
  eventsHeader,
  eventInfo,
  eventInfoSubtitle,
  eventInfoDescription,
  eventInfoDate,
  eventInfoAddress,
  eventInfoTickets,
} from "./styles.module.css"

import Card from "components/UI/Card"
import HashMenu from "components/UI/HashMenu"

export const text = {
  title: "Events",
  header: "Upcoming Event",
  upcomingEventName: "Empowerment",
  getTickets: "Get Tickets",
  cardWidth: "29rem",
  cardHeight: "36.8rem",
  cardMarginTop: "5rem",
  borderColor: "#222222",
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
    dateText: toShortDate(date),
    ...upcomingEvent,
  }

  return <BaseEvents {...baseProps} />
}

const BaseEvents = ({
  cardProps,
  subtitle,
  description,
  addressTop,
  addressBottom,
  linkUrl,
  dateText,
}) => (
  <section id={text.title} className={events}>
    <span className={eventsHeader}>{text.header}</span>
    <Card {...cardProps} />
    <div className={eventInfo} style={{ marginTop: cardProps.marginTop }}>
      <span className={eventInfoSubtitle}>{subtitle}</span>
      <span className={eventInfoDescription}>{description}</span>
      <span className={eventInfoDate}>{dateText}</span>
      <span className={eventInfoAddress}>
        {addressTop},
        <br />
        {addressBottom}
      </span>
      <a href={linkUrl} className={eventInfoTickets}>
        {text.getTickets}
      </a>
    </div>
    <HashMenu sectionTitle={text.title} items={cityPageHashItems} />
  </section>
)

export default Events
