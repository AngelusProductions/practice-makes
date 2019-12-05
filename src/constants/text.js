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

export const mapMarkerIconProps = {
  alt: "map marker",
  src: "https://practice-makes-production.s3.amazonaws.com/map-marker-icon.png",
}
