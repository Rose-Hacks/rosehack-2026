"use client";
import Image from "next/image";
import { useTime, motion, useTransform } from "motion/react";
import Logo from "@/public/engineering/logo.svg";
import Content from "./landing/content";

import tree1 from "@/public/engineering/landing/tree1.svg";
import tree2 from "@/public/engineering/landing/tree2.svg";
import treeBackground1 from "@/public/engineering/landing/tree_background1.svg";
import treeBackground2 from "@/public/engineering/landing/tree_background2.svg";
import light from "@/public/engineering/landing/light.svg";
import path from "@/public/engineering/landing/path.svg";
import SmallFairy from "@/public/engineering/landing/SmallFairy.svg";
import LargeFairy from "@/public/engineering/landing/LargeFairy.svg";

const Landing = () => {
  const time = useTime();
  const smallFairyY = useTransform(
    time,
    (latest) => Math.sin(latest / 1000) * 6,
  );
  const smallFairyX = useTransform(
    time,
    (latest) => Math.sin(latest / 1200) * 3,
  );

  const largeFairyY = useTransform(
    time,
    (latest) => Math.sin((latest + 1500) / 1400) * 10,
  );
  const largeFairyX = useTransform(
    time,
    (latest) => Math.cos(latest / 1600) * 5,
  );
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#F77652] via-[#F55654] to-[#98436B]">
      <Image
        src={path}
        alt="path"
        className="absolute bottom-0 z-40 hidden min-w-full sm:block"
      />
      <Image
        src={tree1}
        alt="tree"
        className="lg:-top-15 absolute left-0 top-0 z-20 h-full sm:h-auto md:left-2 md:top-0 xl:h-screen xl:w-1/4 xl:scale-125 xl:object-contain"
      />
      <Image
        src={treeBackground1}
        alt="tree background"
        className="absolute -top-4 left-2 z-10 hidden scale-125 md:block xl:-top-10 xl:h-screen xl:w-1/4 xl:object-contain"
      />

      <Image
        src={light}
        alt="light"
        className="absolute -left-[100px] top-52 z-0 scale-[0.7]"
      />
      <Image
        src={light}
        alt="light"
        className="absolute -top-40 left-10 z-40 scale-[0.7]"
      />
      <motion.div
        className="absolute left-64 top-60 z-10 hidden sm:block"
        style={{ y: smallFairyY, x: smallFairyX }}
      >
        <Image src={SmallFairy} alt="Small Fairy" />
      </motion.div>
      <div className="absolute z-40 flex w-fit flex-col items-center justify-center gap-4 md:w-full">
        <Image src={Logo} alt="Rose Hack Logo" className="w-1/5 sm:w-1/12" />
        <Content />
      </div>
      <Image
        src={light}
        alt="light"
        className="absolute -top-20 right-2 z-40 scale-[0.4]"
      />
      <Image
        src={light}
        alt="light"
        className="absolute -right-[170px] top-52 z-40 hidden scale-[0.7] sm:block"
      />
      <Image
        src={light}
        alt="light"
        className="absolute -bottom-5 right-20 z-40 hidden scale-[0.7] sm:block"
      />
      <motion.div
        className="absolute bottom-32 right-72 z-30 hidden pb-24 sm:block"
        style={{ y: largeFairyY, x: largeFairyX }}
      >
        <Image src={LargeFairy} alt="Large Fairy" />
      </motion.div>
      <Image
        src={tree2}
        alt="tree"
        className="absolute right-2 z-20 hidden scale-125 md:block xl:-top-20 xl:h-screen xl:w-1/4 xl:object-contain"
      />
      <Image
        src={treeBackground2}
        alt="tree"
        className="absolute -top-4 right-2 z-10 hidden scale-125 md:block xl:-top-10 xl:h-screen xl:w-1/4 xl:object-contain"
      />
    </div>
  );
};

export default Landing;
