import React from "react"
import * as s from "./styles.module.css"

export const text = {
  title: "Coming Soon",
  header: "Secret Design Challenge with Acteryx",
  body:
    "We are thrilled to be partnering with Intrepid to host a design challenge in our store. There will be prizes, drinks, and snacks. Bring your creative tool kit to this installment of the Practice Makes series.",
  questionMarkSrc:
    "https://practice-makes-production.s3.amazonaws.com/UI/question-mark.png",
  questionMarkAlt: "Question Mark",
}

const ComingSoon = () => {
  return (
    <section id='comingSoon' className={s.comingSoon}>
      <h1 className={s.comingSoonTitle}>{text.title}</h1>
      <img
        className={s.questionMark}
        src={text.questionMarkSrc}
        alt={text.questionMarkAlt}
      />
      <div className={s.questionMarkBorderFront} />
      <div className={s.questionMarkBorderBack} />
      <h3 className={s.comingSoonHeader}>{text.header}</h3>
      <p className={s.comingSoonBody}>{text.body}</p>
    </section>
  )
}

export default ComingSoon
