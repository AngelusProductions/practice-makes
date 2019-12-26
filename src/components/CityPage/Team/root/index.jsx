import React from "react"
import * as s from "./styles.module.css"

import Member from "../Member"

export const text = {
  title: "Team",
  header: "Meet the Team",
  cardWidth: "22rem",
  cardHeight: "22rem",
  cardMarginTop: "0",
}

const Team = ({ team }) => {
  const baseProps = {
    cardProps: {
      width: text.cardWidth,
      height: text.cardHeight,
      marginTop: text.cardMarginTop,
      isHoverable: true,
    },
    team,
  }
  return <BaseTeam {...baseProps} />
}

const BaseTeam = ({ cardProps, team }) => (
  <section id={text.title} className={s.team}>
    <h1 className={s.teamHeader}>{text.header}</h1>
    {team.map((member, index, team) => (
      <Member
        index={index}
        cardProps={cardProps}
        team={team}
        key={index}
        {...member}
      />
    ))}
  </section>
)

export default Team
