import React from "react"
import * as s from "./styles.module.css"

import { cityPageHashItems } from "constants/text"

import Event from "../Event"
import HashMenu from "components/UI/HashMenu"

export const t = {
  title: "Archives",
  cardWidth: "17.5rem",
  cardHeight: "21rem",
  cardMarginTop: "0",
  hashMenuTop: "95rem",
}

const Archives = ({ events }) => {
  const baseProps = {
    cardProps: {
      width: t.cardWidth,
      height: t.cardHeight,
      marginTop: t.cardMarginTop,
      isHoverable: true,
    },
    events,
  }
  return <BaseArchives {...baseProps} />
}

const BaseArchives = ({ cardProps, events }) => (
  <section id={t.title} name={t.title} className={s.archives}>
    <h1 className={s.archivesHeader}>{t.title}</h1>
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
      sectionTitle={t.title}
      items={cityPageHashItems}
      top={t.hashMenuTop}
    />
  </section>
)

export default Archives
