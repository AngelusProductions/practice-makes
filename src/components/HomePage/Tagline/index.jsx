import React from "react"

import { appName } from "constants/text"

import {
  tagLine,
  tagLineTop,
  tagLineBottom,
  tagLineUnderline,
} from "./styles.module.css"

export const text = {
  top: appName,
  bottom: "Imperfect",
}

const TagLine = () => (
  <h1 className={tagLine}>
    <span className={tagLineTop}>{text.top}</span>
    <span className={tagLineBottom}>{text.bottom}</span>
    <span className={tagLineUnderline} />
  </h1>
)

export default TagLine
