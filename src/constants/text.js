import { blogPath, aboutPath } from "./paths"

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
    url: "welcome",
  },
  {
    name: "Contact",
    url: "contact",
  },
  {
    name: "About",
    url: "about",
  },
  {
    name: "Archives",
    url: "archives",
  },
  {
    name: "Events",
    url: "events",
  },
]

export const mapMarkerIconProps = {
  alt: "map marker",
  src:
    "https://practice-makes-production.s3.amazonaws.com/UI/map-marker-icon.png",
}
