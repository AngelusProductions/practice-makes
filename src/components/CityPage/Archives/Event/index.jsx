import React from "react"
import * as s from "./styles.module.css"

import { toLongDate } from "constants/utils"

import Card from "components/UI/Card"

export const text = {
  title: "Archives",
  heightBetweenRows: 12,
  webLink: "Eventbrite Page",
}

const Event = ({
  index,
  cardProps,
  name,
  linkUrl,
  photoUrl,
  date,
  details,
}) => {
  const sideLabelText = `${toLongDate(date)}: ${name}`
  const rowIndex = Math.floor(index / 3)
  let gridColumn, top
  switch (index % 3) {
    case 0:
      gridColumn = 2
      top = `${-1 * rowIndex * text.heightBetweenRows}vw`
      break
    case 1:
      gridColumn = 1
      top = `${-19 - rowIndex * text.heightBetweenRows}vw`
      break
    default:
      gridColumn = 3
      top = `${-13 - rowIndex * text.heightBetweenRows}vw`
      break
  }

  const detailsComponent = (
    <>
      <span className={s.jobTitle}>{details}</span>
      <a href={linkUrl} className={s.webLink}>
        {text.webLink}
      </a>
    </>
  )
  return (
    <div className={s.event} style={{ gridColumn, top }}>
      <Card
        photoUrl={photoUrl}
        alt={name}
        title={name}
        details={detailsComponent}
        sideLabel={() => (
          <span className={s.sideLabel}>{sideLabelText}</span>
        )}
        {...cardProps}
      />
    </div>
  )
}

export default Event
