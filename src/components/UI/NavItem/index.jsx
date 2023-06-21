import React from "react"

import * as s from "./styles.module.css"

import { scroller } from 'react-scroll'

import { rootPath } from "constants/paths"

export const text = {
  black: "#222222",
  white: "white",
  short: "2px",
  tall: "4px",
}

const NavItem = ({ id, name, isNotLastItem, pathname }) => {
  const backgroundColor = pathname === rootPath ? text.black : text.white
  const width = pathname === rootPath ? text.short : text.tall
    const onItemClick = e => {
    scroller.scrollTo(`${e.target.id}Section`, {
      duration: 1000,
      delay: 50,
      smooth: 'easeInOutQuint'
    })
  }
  return (
    <>
      <span id={id} onClick={onItemClick} className={s.navItem}>
        {name}
      </span>
      {isNotLastItem && (
        <div className={s.dashIcon} style={{ backgroundColor, width }} />
      )}
    </>
  )
}

export default NavItem