import React from "react"
// import { withRouter } from "react-router-dom"
import * as s from "./styles.module.css"

import { cityPageHashItems } from "constants/text"

import HashMenu from "components/UI/HashMenu"

export const text = {
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
  hashMenuTop: "45rem",
}

const Contact = ({ addressTop, addressBottom, assets }) => (
  <section id={text.title} className={s.contact}>
    <h1 className={s.contactHeader}>{text.header}</h1>

    <div className={s.contactInfo}>
      <p className={s.contactInfoDescription}>{text.description}</p>
      <span className={s.contactInfoAddress}>
        {text.office}
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
      <label htmlFor={text.name}>{text.name}</label>
      <input
        type="text"
        id={text.name}
        name={text.name}
        placeholder={text.name}
      />

      <label htmlFor={text.email}>{text.email}</label>
      <input
        type="text"
        id={text.email}
        name={text.email}
        placeholder={text.email}
      />

      <label htmlFor={text.subject}>{text.subject}</label>
      <input
        type="text"
        id={text.subject}
        name={text.subject}
        placeholder={text.subject}
      />

      <label htmlFor={text.message}>{text.message}</label>
      <textarea
        id={text.message}
        name={text.message}
        placeholder={`${text.message}...`}
      />

      <input type="submit" value={text.send} />
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
        {text.footer.beginning}
        <p style={{ fontFamily: "Space Mono", display: "inline-block" }}>
          {text.footer.accenture}
        </p>
        {text.footer.end}
      </span>
    </footer>

    <HashMenu
      sectionTitle={text.title}
      items={cityPageHashItems}
      top={text.hashMenuTop}
    />
  </section>
)

export default Contact
