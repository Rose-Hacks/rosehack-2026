"use client";
import Image from "next/image";
import { useTime, motion, useTransform } from "motion/react";
import preSponsorBranch from "@/public/engineering/landing/preSponsorBranch.svg";
import SmallFairy from "@/public/engineering/landing/SmallFairy.svg";
import LargeFairy from "@/public/engineering/landing/LargeFairy.svg";

const PreSponsors = () => {
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
    <div className="bg-gradient-to-b from-[#F46055] to-[#9C6E6B]">
      <Image
        src={preSponsorBranch}
        alt="Branch with hanging lantern"
        className="justify-left m-0 h-[35vh] w-auto p-0 md:h-[50vh]"
      />
      <motion.div
        className="absolute right-48 z-40"
        style={{ y: smallFairyY, x: smallFairyX }}
      >
        <Image src={SmallFairy} alt="Small Fairy" />
      </motion.div>
    </div>
  );
};

export default PreSponsors;
