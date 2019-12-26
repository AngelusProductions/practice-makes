import React from "react"
import * as s from "./styles.module.css"

import { cityPageHashItems } from "constants/text"

import Event from "../Event"
import HashMenu from "components/UI/HashMenu"

export const text = {
  title: "Archives",
  cardWidth: "22rem",
  cardHeight: "28.02rem",
  cardMarginTop: "0",
  hashMenuTop: "56rem",
}

const Archives = ({ events }) => {
  const baseProps = {
    cardProps: {
      width: text.cardWidth,
      height: text.cardHeight,
      marginTop: text.cardMarginTop,
      isHoverable: true,
    },
    events,
  }
  return <BaseArchives {...baseProps} />
}

const BaseArchives = ({ cardProps, events }) => (
  <section id={text.title} className={s.archives}>
    <h1 className={s.archivesHeader}>{text.title}</h1>
    {events.map((event, index, events) => (
      <Event
        index={index}
        cardProps={cardProps}
        events={events}
        key={event.name}
        {...event}
      />
    ))}
    <HashMenu
      sectionTitle={text.title}
      items={cityPageHashItems}
      top={text.hashMenuTop}
    />
  </section>
)

export default Archives
