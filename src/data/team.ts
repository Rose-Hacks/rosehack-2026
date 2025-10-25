import { StaticImageData } from "next/image";

import Alessandro from "@/public/engineering/landing/headshots/Alessandro.webp";
import Fatima from "@/public/engineering/landing/headshots/Fatima.webp";

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
];

export default Teams;
