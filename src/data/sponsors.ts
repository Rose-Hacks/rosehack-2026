import { StaticImageData } from "next/image";

import ThreeDConn from "@/public/engineering/landing/sponsors/3dconn.png";
import Efg from "@/public/engineering/landing/sponsors/efg.png";
import Hhkb from "@/public/engineering/landing/sponsors/hhkb.png";
import Bcoe from "@/public/engineering/landing/sponsors/ucrbcoe.png";
import Winc from "@/public/engineering/landing/sponsors/winc.png";
import CodeRabbit from "@/public/engineering/landing/sponsors/codeRabbit.png";

export interface Team {
  name: string;
  image: StaticImageData;
}

const Teams: Team[] = [
  {
    name: "WINC",
    image: Winc,
  },
  {
    name: "BCOE",
    image: Bcoe,
  },
  {
    name: "EFG",
    image: Efg,
  },
  {
    name: "3DCONNEXION",
    image: ThreeDConn,
  },
  {
    name: "HHKB",
    image: Hhkb,
  },
  {
    name: "Code Rabbit",
    image: CodeRabbit,
  },
];

export default Teams;
