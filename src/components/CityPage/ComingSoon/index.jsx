import React from "react"

import {
  comingSoon,
  comingSoonTitle,
  comingSoonHeader,
  comingSoonBody,
  questionMark,
  questionMarkBorderFront,
  questionMarkBorderBack,
} from "./styles.module.css"

export const text = {
  title: "Coming Soon",
  header: "Secret Design Challenge with Acteryx",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet nisl purus in. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.",
  questionMarkSrc:
    "https://practice-makes-production.s3.amazonaws.com/UI/question-mark.png",
  questionMarkAlt: "Question Mark",
}

const ComingSoon = () => {
  return (
    <section id={text.title} className={comingSoon}>
      <h1 className={comingSoonTitle}>{text.title}</h1>
      <img
        className={questionMark}
        src={text.questionMarkSrc}
        alt={text.questionMarkAlt}
      />
      <div className={questionMarkBorderFront} />
      <div className={questionMarkBorderBack} />
      <h3 className={comingSoonHeader}>{text.header}</h3>
      <p className={comingSoonBody}>{text.body}</p>
    </section>
  )
}

export default ComingSoon
