import { StaticImageData } from "next/image";

import Alessandro from "@/public/engineering/landing/headshots/Alessandro.webp";
import Arielle from "@/public/engineering/landing/headshots/Arielle.webp";
import Arya from "@/public/engineering/landing/headshots/Arya.webp";
import Charleen from "@/public/engineering/landing/headshots/Charleen.webp";

import ThreeDConn from "@/public/engineering/landing/sponsors/3dconn.png";
import Efg from "@/public/engineering/landing/sponsors/efg.png";
import Hhkb from "@/public/engineering/landing/sponsors/hhkb.png";
import Bcoe from "@/public/engineering/landing/sponsors/ucrbcoe.png";
import Winc from "@/public/engineering/landing/sponsors/winc.webp";

export interface Team {
  name: string;
  image: StaticImageData;
}

const Teams: Team[] = [
  {
    name: "3DCONNEXION",
    image: ThreeDConn,
  },
  {
    name: "Alessandro",
    image: Efg,
  },
  {
    name: "Lydia",
    image: Hhkb,
  },
  {
    name: "Jia",
    image: Bcoe,
  },
  {
    name: "Shreya",
    image: Winc,
  },
];

export default Te