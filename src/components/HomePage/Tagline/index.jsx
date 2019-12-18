import React from "react"
import * as s from "./styles.module.css"

import { appName } from "constants/text"

export const text = {
  bottom: "Imperfect",
}

const Tagline = () => (
  <header className={s.tagline}>
    <span className={s.taglineTop}>{appName}</span>
    <span className={s.taglineBottom}>{text.bottom}</span>
    <span className={s.taglineBottomUnderline} />
  </header>
)

export default Tagline
