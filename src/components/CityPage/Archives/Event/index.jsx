import React from "react"
import * as s from "./styles.module.css"

import { toLongDate } from "constants/utils"

import Card from "components/UI/Card"

export const t = {
  title: "Archives",
  heightRatio: 12,
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
  let gridColumn, top
  const sideLabelText = `${toLongDate(date)}: ${name}`
  const rowIndex = Math.floor(index / 3)
  switch (index % 3) {
    case 0:
      gridColumn = 2
      top = `${-1 * rowIndex * t.heightRatio}vw`
      break
    case 1:
      gridColumn = 1
      top = `${-19 - rowIndex * t.heightRatio}vw`
      break
    default:
      gridColumn = 3
      top = `${-13 - rowIndex * t.heightRatio}vw`
      break
  }
  const detailsComponent = (
    <>
      <span className={s.jobTitle}>{details}</span>
      <a href={linkUrl} className={s.webLink}>
        {t.webLink}
      </a>
    </>
  )
  const sideLabel = <span className={s.sideLabel}>{sideLabelText}</span>
  return (
    <div className={s.event} style={{ gridColumn, top }}>
      <Card
        photoUrl={photoUrl}
        alt={name}
        title={name}
        details={detailsComponent}
        sideLabel={sideLabel}
        {...cardProps}
      />
    </div>
  )
}

export default Event
