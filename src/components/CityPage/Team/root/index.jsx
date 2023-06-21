import React from "react"
import * as s from "./styles.module.css"

import HashMenu from "components/UI/HashMenu"
import Member from "../Member"

export const t = {
  title: "Team",
  header: "Meet the Team",
  cardSize: "15rem",
  cardMarginTop: "0",
  hashMenuTop: '33rem'
}

const Team = ({ team }) => {
  const baseProps = {
    cardProps: {
      width: t.cardSize,
      height: t.cardSize,
      marginTop: t.cardMarginTop,
      isHoverable: true,
    },
    team,
  }
  return <BaseTeam {...baseProps} />
}

const BaseTeam = ({ cardProps, team }) => (
  <section id='teamSection' name={t.title} className={s.team}>
    <h1 className={s.teamHeader}>{t.header}</h1>
    <div className={s.teamList}>
      {team.map((member, index, team) => (
        <Member
          index={index}
          cardProps={cardProps}
          team={team}
          key={index}
          {...member}
        />
      ))}
    </div>      
    <HashMenu
      sectionId={t.title.toLowerCase()}
      top={t.hashMenuTop}
    />
  </section>
)

export default Team
