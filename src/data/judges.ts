import { StaticImageData } from "next/image";

import AmedeoAlberio from "@/public/engineering/landing/judges/Amedeo_Alberio.webp";
import AribaHasan from "@/public/engineering/landing/judges/Ariba_Hasan.webp";
import AshokKumar from "@/public/engineering/landing/judges/Ashok_Kumar.webp";
import JoshuaCandelaria from "@/public/engineering/landing/judges/Joshua_Candelaria.webp";
import RamakantSamal from "@/public/engineering/landing/judges/Ramakant_Samal.webp";
import RobinWang from "@/public/engineering/landing/judges/Robin_Wang.webp";
import AshishDibouliya from "@/public/engineering/landing/judges/Ashish_Dibouliya.webp";
import SancheeKaushik from "@/public/engineering/landing/judges/Sanchee_Kaushik.webp";
import SandeepKhandelwal from "@/public/engineering/landing/judges/Sandeep_Khandelwal.webp";
import NidhiSharma from "@/public/engineering/landing/judges/Nidhi_Sharma.webp";

export interface Judge {
  name: string;
  image: StaticImageData;
  role?: string;
}

const Judges: Judge[] = [
  {
    name: "Nidhi Sharma",
    image: NidhiSharma,
    role: "Senior Software Engineering Leader @ Cox Automotive",
  },
  {
    name: "Sandeep Khandelwal",
    image: SandeepKhandelwal,
    role: "Senior Technical Engineer @ Atlassian",
  },
  {
    name: "Amedeo Alberio",
    image: AmedeoAlberio,
    role: "SWE @ Meta",
  },
  {
    name: "Ariba Hasan",
    image: AribaHasan,
    role: "Lead Researcher @ ELITE Research Lab LLC.",
  },
  {
    name: "Ashok Kumar",
    image: AshokKumar,
    role: "Tech Lead @ Walmart Global Tech",
  },
  {
    name: "Sanchee Kaushik",
    image: SancheeKaushik,
    role: "Senior Data Engineer @ CVS Health",
  },
  {
    name: "Joshua Candelaria",
    image: JoshuaCandelaria,
    role: "SWE @ General Atomics",
  },
  {
    name: "Ramakant Samal",
    image: RamakantSamal,
    role: "Senior SWE @ IBM",
  },
  {
    name: "Robin Wang",
    image: RobinWang,
    role: "Founder and CEO @ AgentX",
  },
  {
    name: "Ashish Dibouliya",
    image: AshishDibouliya,
    role: "Managing Director of Data Architecture @ Webster Bank",
  },
];

export default Judges;
