import React from "react"
import * as s from "./styles.module.css"

import HashMenu from "components/UI/HashMenu"

export const t = {
  title: "Contact",
  header: "Contact Us",
  name: "name",
  email: "email",
  subject: "subject",
  message: "message",
  send: "send",
  description:
    "Intrepid’s 150 employees have joined Accenture Digital as a result of the acquisition. The team will focus on the rapid development of innovative digital services and solutions, using agile tools in a collaborative environment where clients can work side by side with Accenture designers, engineers and mobile experts. Intrepid expands Accenture’s capabilities in design, native app development, connected device engineering and web development in North America, strengthening its ability to help clients take the lead in an era where connected experience is the new battleground.",
  office: "Office One",
  footer: {
    beginning: "An ",
    accenture: "Accenture",
    end: " Interactive Company",
  },
  twitterLink: "https://twitter.com/intpd?lang=en",
  instagramLink: "https://www.instagram.com/intpd/?hl=en",
  hashMenuTop: "40rem",
}

const Contact = ({ addressTop, addressBottom, assets }) => (
  <section id='contactSection' name={t.title} className={s.contact}>
    <h1 className={s.contactHeader}>{t.header}</h1>

    <div className={s.contactInfo}>
      <p className={s.contactInfoDescription}>{t.description}</p>
      <span className={s.contactInfoAddress}>
        {t.office}
        <br />
        <br />
        {addressTop},
        <br />
        {addressBottom}
      </span>
    </div>

    <form
      className={s.contactForm}
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <label htmlFor={t.name}>{t.name}</label>
      <input
        type="text"
        id={t.name}
        name={t.name}
        placeholder={t.name}
      />

      <label htmlFor={t.email}>{t.email}</label>
      <input
        type="text"
        id={t.email}
        name={t.email}
        placeholder={t.email}
      />

      <label htmlFor={t.subject}>{t.subject}</label>
      <input
        type="text"
        id={t.subject}
        name={t.subject}
        placeholder={t.subject}
      />

      <label htmlFor={t.message}>{t.message}</label>
      <textarea
        id={t.message}
        name={t.message}
        placeholder={`${t.message}...`}
      />

      <input type="submit" value={t.send} />
    </form>

    <footer className={s.contactFooter}>
      <img
        src={assets.twitter}
        className={s.twitterIcon}
        alt={"twitter"}
      />
      <img
        src={assets.instagram}
        className={s.instagramIcon}
        alt={"instagram"}
      />
      <span className={s.contactCopyright}>
        {t.footer.beginning}
        <p style={{ fontFamily: "Space Mono", display: "inline-block" }}>
          {t.footer.accenture}
        </p>
        {t.footer.end}
      </span>
    </footer>

    <HashMenu
      sectionId={t.title.toLowerCase()}
      top={t.hashMenuTop}
    />
  </section>
)

export default Contact
