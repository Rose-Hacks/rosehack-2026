import { StaticImageData } from "next/image";

import ThreeDConn from "@/public/engineering/landing/sponsors/3dconn.webp";
import Efg from "@/public/engineering/landing/sponsors/efg.png";
import Hhkb from "@/public/engineering/landing/sponsors/hhkb.webp";
import Bcoe from "@/public/engineering/landing/sponsors/ucrbcoe.webp";
import Winc from "@/public/engineering/landing/sponsors/winc.webp";
import CodeRabbit from "@/public/engineering/landing/sponsors/codeRabbit.webp";
import Unibee from "@/public/engineering/landing/sponsors/unibee.webp";
import Wolfram from "@/public/engineering/landing/sponsors/wolfram.webp";
import SchoolOfBusiness from "@/public/engineering/landing/sponsors/schoolOfBusiness.png";

export interface Sponsor {
  name: string;
  image: StaticImageData;
}

const Sponsors: Sponsor[] = [
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
    name: "UCR School of Business",
    image: SchoolOfBusiness,
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
  {
    name: "Unibee",
    image: Unibee,
  },
  {
    name: "Wolfram",
    image: Wolfram,
  },
];

export default Sponsors;
