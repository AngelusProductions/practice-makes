import {
  blogPath,
  aboutPath,
  welcomeHash,
  eventsHash,
  archivesHash,
  aboutHash,
  contactHash,
} from "./paths"

export const appName = "Practice Makes"
export const appAuthor = "Intrepid"

export const homePageNavItems = [
  {
    name: "About Us",
    url: aboutPath,
  },
  {
    name: "Blog",
    url: blogPath,
  },
]

export const cityPageHashItems = [
  {
    name: "Welcome",
    url: welcomeHash,
  },
  {
    name: "Contact",
    url: contactHash,
  },
  {
    name: "About",
    url: aboutHash,
  },
  {
    name: "Archives",
    url: archivesHash,
  },
  {
    name: "Events & Tickets",
    url: eventsHash,
  },
]

export const mapMarkerIconProps = {
  alt: "map marker",
  src:
    "https://practice-makes-production.s3.amazonaws.com/UI/map-marker-icon.png",
}
