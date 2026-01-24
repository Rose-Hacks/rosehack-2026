import { StaticImageData } from "next/image";

import AmedeoAlberio from "@/public/engineering/landing/judges/Amedeo_Alberio.webp";
import AribaHasan from "@/public/engineering/landing/judges/Ariba_Hasan.webp";
import AshokKumar from "@/public/engineering/landing/judges/Ashok_Kumar.webp";
import RamakantSamal from "@/public/engineering/landing/judges/Ramakant_Samal.webp";
import RobinWang from "@/public/engineering/landing/judges/Robin_Wang.webp";
import AshishDibouliya from "@/public/engineering/landing/judges/Ashish_Dibouliya.webp";
import SandeepKhandelwal from "@/public/engineering/landing/judges/Sandeep_Khandelwal.webp";
import JeremyWooSam from "@/public/engineering/landing/judges/Jeremy_Woo-Sam.webp";
import VinzMadrigal from "@/public/engineering/landing/judges/Vinz_Madrigal.webp";
import AnoushkaMergoju from "@/public/engineering/landing/judges/Anoushka_Mergoju.webp";
import AnujaDawane from "@/public/engineering/landing/judges/Anuja_Dawane.webp";
import DebbieMorford from "@/public/engineering/landing/judges/Debbie_Morford.webp";
import KarthikBodducherla from "@/public/engineering/landing/judges/Karthik_Bodducherla.webp";
import PallaviSaitu from "@/public/engineering/landing/judges/Pallavi_Saitu.webp";
import SofiaDelaMoraTostado from "@/public/engineering/landing/judges/Sofia_De_la_Mora_Tostado.webp";
import SwetaMulji from "@/public/engineering/landing/judges/Sweta_Mulji.webp";
import VijayasaiMunduru from "@/public/engineering/landing/judges/Vijaya_sai_Munduru.webp";
import ZeynepYorulmaz from "@/public/engineering/landing/judges/Zeynep_Yorulmaz.webp";
import SitaramSrivatsavai from "@/public/engineering/landing/judges/Sitaram_Srivatsavai.webp";
import SravanKumarArava from "@/public/engineering/landing/judges/SravanKumar_Arava.webp";
import SivakumarDhanasekar from "@/public/engineering/landing/judges/Sivakumar_Dhanasekar.webp";
import IoanaMunteanu from "@/public/engineering/landing/judges/Ioana_Munteanu.webp";
import SanskritiShindadkar from "@/public/engineering/landing/judges/Sanskriti_Shindadkar.webp";

export interface Judge {
  name: string;
  image: StaticImageData;
  role?: string;
}

const Judges: Judge[] = [
  {
    name: "Sandeep Khandelwal",
    image: SandeepKhandelwal,
    role: "Senior Technical Engineer @ Atlassian",
  },
  {
    name: "Ariba Hasan",
    image: AribaHasan,
    role: "Lead Researcher @ ELITE Research Lab LLC.",
  },
  {
    name: "Amedeo Alberio",
    image: AmedeoAlberio,
    role: "SWE @ Meta",
  },
  {
    name: "Anuja	Dawane",
    image: AnujaDawane,
    role: "Senior Software Engineer	@ Amazon Lab126",
  },
  {
    name: "Ashok Kumar",
    image: AshokKumar,
    role: "Tech Lead @ Walmart Global Tech",
  },
  {
    name: "Sweta Mulji",
    image: SwetaMulji,
    role: "Co-founder and Chief Customer Officer @ SalesPlay X",
  },
  {
    name: "Ramakant Samal",
    image: RamakantSamal,
    role: "Senior SWE @ IBM",
  },
  {
    name: "Anoushka Mergoju",
    image: AnoushkaMergoju,
    role: "Software Development Engineer @ Amazon Prime Air",
  },
  {
    name: "Ashish Dibouliya",
    image: AshishDibouliya,
    role: "Managing Director of Data Architecture @ Webster Bank",
  },
  {
    name: "Jeremy Woo-Sam",
    image: JeremyWooSam,
    role: "Program Manager @ EFG",
  },
  {
    name: "Vinz Madrigal",
    image: VinzMadrigal,
    role: "SWE @ EFG",
  },
  {
    name: "Sofia De la Mora Tostado",
    image: SofiaDelaMoraTostado,
    role: "CTO @ Intelital",
  },
  {
    name: "Pallavi Saitu",
    image: PallaviSaitu,
    role: "Senior Data Analyst @ Myvest",
  },
  {
    name: "Robin Wang",
    image: RobinWang,
    role: "Founder and CEO @ AgentX",
  },

  {
    name: "Debbie	Morford",
    image: DebbieMorford,
    role: "Retired Computer Scientist	@ Lawrence Livermore National Laboratory",
  },

  {
    name: "Zeynep	Yorulmaz",
    image: ZeynepYorulmaz,
    role: "Co-founder & CEO @ Mindra",
  },
  {
    name: "Karthik Bodducherla",
    image: KarthikBodducherla,
    role: "Director and Application Development @ IQVIA",
  },
  {
    name: "Vijaya sai	Munduru",
    image: VijayasaiMunduru,
    role: "Lead Member of Technical Staff	@ Salesforce",
  },
  {
    name: "Sitaram Srivatsavai",
    image: SitaramSrivatsavai,
    role: "Senior Director of Software Development @ IQVIA",
  },
  {
    name: "Sravan Kumar Arava",
    image: SravanKumarArava,
    role: "Manager of Data Integration @ Guitar Center",
  },
  {
    name: "Sivakumar Dhanasekar",
    image: SivakumarDhanasekar,
    role: "Lead Software Engineer @ Equifax",
  },
  {
    name: "Ioana Munteanu",
    image: IoanaMunteanu,
    role: "Product Software Engineer @ Sigma Computing",
  },
  {
    name: "Sanskriti Shindadkar",
    image: SanskritiShindadkar,
    role: "Researcher @ UCLA & Independently",
  },
];

export default Judges;
