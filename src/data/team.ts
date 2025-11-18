import { StaticImageData } from "next/image";

import Alessandro from "@/public/engineering/landing/headshots/Alessandro.webp";
import Arielle from "@/public/engineering/landing/headshots/Arielle.webp";
import Charleen from "@/public/engineering/landing/headshots/Charleen.JPG";
import Fatima from "@/public/engineering/landing/headshots/Fatima.webp";
import Jasmine from "@/public/engineering/landing/headshots/Jasmine.JPG";
import Jia from "@/public/engineering/landing/headshots/Jia.webp";
import Kaylie from "@/public/engineering/landing/headshots/Kaylie.JPG";
import Kevin from "@/public/engineering/landing/headshots/Kevin.JPG";
import Lydia from "@/public/engineering/landing/headshots/Lydia.JPG";
import Michelle from "@/public/engineering/landing/headshots/Michelle.webp";
import Quin from "@/public/engineering/landing/headshots/Quin.JPG";
import Selina from "@/public/engineering/landing/headshots/Selina.JPG";
import Shane from "@/public/engineering/landing/headshots/Shane.JPG";
import Shreya from "@/public/engineering/landing/headshots/Shreya.JPG";

export interface Team {
  name: string;
  image: StaticImageData;
  role: string;
}

const Teams: Team[] = [
  {
    name: "Fatima",
    image: Fatima,
    role: "Co-Director",
  },
  {
    name: "Alessandro",
    image: Alessandro,
    role: "Co-Director",
  },
  {
    name: "Lydia",
    image: Lydia,
    role: "Operations",
  },
  {
    name: "Jia",
    image: Jia,
    role: "Operations",
  },
  {
    name: "Shreya",
    image: Shreya,
    role: "Operations",
  },
  {
    name: "Shane",
    image: Shane,
    role: "Operations",
  },
  {
    name: "Michelle",
    image: Michelle,
    role: "Sponsorship",
  },
  {
    name: "Arielle",
    image: Arielle,
    role: "Sponsorship",
  },
  {
    name: "Selina",
    image: Selina,
    role: "Sponsorship",
  },
  {
    name: "Jasmine",
    image: Jasmine,
    role: "Marketing",
  },
  {
    name: "Kaylie",
    image: Kaylie,
    role: "Marketing",
  },
  {
    name: "Charleen",
    image: Charleen,
    role: "Marketing / SWE",
  },
  {
    name: "Kevin",
    image: Kevin,
    role: "SWE",
  },
  {
    name: "Quin",
    image: Quin,
    role: "SWE",
  },
];

export default Teams;
