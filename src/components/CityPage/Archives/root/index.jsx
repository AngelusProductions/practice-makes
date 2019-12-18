import React from "react"
import * as s from "./styles.module.css"

import { cityPageHashItems } from "constants/text"

import Event from "../Event"
import HashMenu from "components/UI/HashMenu"

export const text = {
  title: "Archives",
  cardWidth: "29rem",
  cardHeight: "36.8rem",
  cardMarginTop: "5rem",
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
    <h1 className={s.archivesHeader}>{text.header}</h1>
    {events.map((event, index, events) => (
      <Event index={index} cardProps={cardProps} events={events} {...event} />
    ))}
    <HashMenu sectionTitle={text.title} items={cityPageHashItems} />
  </section>
)

export default Archives
