import flexible from "../../public/assets/flexible.jpg"
import europe from "../../public/assets/europe.webp"
import thailand from "../../public/assets/thailand.webp"
import usa from "../../public/assets/usa.webp"
import southKorea from "../../public/assets/south-korea.webp"
import australia from "../../public/assets/australia.webp"

export interface regionType {
  id: number,
  text: string,
  value: string,
  image: any
}
export const region: regionType[] = [
  {
    id: 1,
    text: "I'm flexible",
    value: "",
    image: flexible
  },
  {
    id: 2,
    text: "Europe",
    value: "Europe",
    image: europe
  },
  {
    id: 3,
    text: "Thailand",
    value: "Thailand",
    image: thailand
  },
  {
    id: 4,
    text: "United States",
    value: "United States",
    image: usa
  },
  {
    id: 5,
    text: "South Korea",
    value: "South Korea",
    image: southKorea
  },
  {
    id: 6,
    text: "Australia",
    value: "Australia",
    image: australia
  },
]
