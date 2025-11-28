import { StaticImageData } from "next/image";

import Alessandro from "@/public/engineering/landing/headshots/Alessandro.webp";
import Arielle from "@/public/engineering/landing/headshots/Arielle.webp";
import Arya from "@/public/engineering/landing/headshots/Arya.webp";
import Charleen from "@/public/engineering/landing/headshots/Charleen.webp";
import Fatima from "@/public/engineering/landing/headshots/Fatima.webp";
import Jasmine from "@/public/engineering/landing/headshots/Jasmine.webp";
import Jia from "@/public/engineering/landing/headshots/Jia.webp";
import Kaylie from "@/public/engineering/landing/headshots/Kaylie.webp";
import Kevin from "@/public/engineering/landing/headshots/Kevin.webp";
import Lydia from "@/public/engineering/landing/headshots/Lydia.webp";
import Michelle from "@/public/engineering/landing/headshots/Michelle.webp";
import Quin from "@/public/engineering/landing/headshots/Quin.webp";
import Selina from "@/public/engineering/landing/headshots/Selina.webp";
import Shane from "@/public/engineering/landing/headshots/Shane.webp";
import Shreya from "@/public/engineering/landing/headshots/Shreya.webp";

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
    role: "Operations Co-Lead",
  },
  {
    name: "Jia",
    image: Jia,
    role: "Operations Co-Lead",
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
    role: "Sponsorship Lead",
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
    name: "Arya",
    image: Arya,
    role: "Sponsorship",
  },
  {
    name: "Jasmine",
    image: Jasmine,
    role: "Marketing Lead",
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
    role: "SWE Lead",
  },
  {
    name: "Quin",
    image: Quin,
    role: "SWE",
  },
];

export default Teams;
