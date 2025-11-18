import { StaticImageData } from "next/image";

import Alessandro from "@/public/engineering/landing/headshots/Alessandro.png";
import Arielle from "@/public/engineering/landing/headshots/Arielle.png";
import Charleen from "@/public/engineering/landing/headshots/Charleen.png";
import Fatima from "@/public/engineering/landing/headshots/Fatima.png";
import Jasmine from "@/public/engineering/landing/headshots/Jasmine.png";
import Jia from "@/public/engineering/landing/headshots/Jia.png";
import Kaylie from "@/public/engineering/landing/headshots/Kaylie.png";
import Kevin from "@/public/engineering/landing/headshots/Kevin.png";
import Lydia from "@/public/engineering/landing/headshots/Lydia.png";
import Michelle from "@/public/engineering/landing/headshots/Michelle.png";
import Quin from "@/public/engineering/landing/headshots/Quin.png";
import Selina from "@/public/engineering/landing/headshots/Selina.png";
import Shane from "@/public/engineering/landing/headshots/Shane.png";
import Shreya from "@/public/engineering/landing/headshots/Shreya.png";

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
