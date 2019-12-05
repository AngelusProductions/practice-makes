import React from "react"

import { appName } from "constants/text"

import {
  tagline,
  taglineTop,
  taglineBottom,
  taglineBottomUnderline,
} from "./styles.module.css"

export const text = {
  top: appName,
  bottom: "Imperfect",
}

const Tagline = () => (
  <header className={tagline}>
    <span className={taglineTop}>{text.top}</span>
    <span className={taglineBottom}>{text.bottom}</span>
    <span className={taglineBottomUnderline} />
  </header>
)

export default Tagline
