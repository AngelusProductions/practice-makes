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
    id: "welcome",
  },
  {
    name: "Events",
    id: "events",
  },
  {
    name: "Archives",
    id: "archives",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Team",
    id: "team",
  },
  {
    name: "Contact",
    id: "contact",
  },
]

export const mapMarkerIconProps = {
  alt: "map marker",
  src:
    "https://practice-makes-production.s3.amazonaws.com/UI/map-marker-icon.png",
}
