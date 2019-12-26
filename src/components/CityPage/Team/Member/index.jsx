import React from "react"
import * as s from "./styles.module.css"

import Card from "components/UI/Card"

export const text = {
  title: "Team",
  webLink: "Personal Site",
  heightBetweenRows: 12,
}

const Member = ({
  index,
  cardProps,
  firstName,
  lastName,
  job,
  linkUrl,
  photoUrl,
}) => {
  const fullName = `${firstName} ${lastName}`
  const rowIndex = Math.floor(index / 3)
  let gridColumn, top
  switch (index % 3) {
    case 0:
      gridColumn = 2
      top = `${25 - rowIndex * text.heightBetweenRows}rem`
      break
    case 1:
      gridColumn = 1
      top = `${-19 - rowIndex * text.heightBetweenRows}rem`
      break
    default:
      gridColumn = 3
      top = `${-13 - rowIndex * text.heightBetweenRows}rem`
      break
  }
  const details = (
    <>
      <span className={s.jobTitle}>{job}</span>
      <a href={linkUrl} className={s.webLink}>
        {text.webLink}
      </a>
    </>
  )
  return (
    <div className={s.member} style={{ gridColumn, top }}>
      <Card
        photoUrl={photoUrl}
        alt={fullName}
        title={fullName}
        details={details}
        {...cardProps}
      />
      <span className={s.sideLabel}>{fullName}</span>
    </div>
  )
}

export default Member
