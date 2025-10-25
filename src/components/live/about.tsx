"use client";
import Image from "next/image";
import { useTime, motion, useTransform } from "motion/react";

import Title from "@/components/ui/title";

import Bottle from "@/public/engineering/landing/Bottle.svg";
import SmallFairy from "@/public/engineering/landing/SmallFairy.svg";
import LargeFairy from "@/public/engineering/landing/LargeFairy.svg";

const About = () => {
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
    (latest) => Math.sin((latest + 1500) / 1400) * 5,
  );
  const largeFairyX = useTransform(
    time,
    (latest) => Math.cos(latest / 1600) * 2,
  );
  return (
    <div
      className="bg-linear-to-b flex h-[50vh] items-center justify-center from-[#243B3D] to-[#F46055]"
      style={{
        background:
          "linear-gradient(to bottom, #243B3D 0%, #416D70 31%, #AA7F7B 71%, #F46055 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="flex w-1/2 flex-col gap-4 font-rosehack-main text-xl text-white md:w-2/3">
          <Title>About Us</Title>
          <p className="pt-4">
            Rose Hack is UC Riverside's 24-hour hackathon, one of the few
            women-centric hackathons in California! Founded by the female
            leaders of the Association for Computing Machinery (ACM-W) and the
            Society of Women Engineers (SWE).
          </p>
          <p>
            Rose Hack's mission is to encourage individuals from
            underrepresented groups in STEM to gain experience, create strong
            networks, and build amazing projects through their shared passions
            in Science and Technology.
          </p>
        </div>
        <div className="relative flex w-3/4 items-center justify-center md:w-1/3">
          <motion.div
            className="pt-24"
            style={{ y: smallFairyY, x: smallFairyX }}
          >
            <Image src={SmallFairy} alt="Small Fairy" />
          </motion.div>

          <Image src={Bottle} alt="Bottle" />
          <motion.div
            className="pb-24"
            style={{ y: largeFairyY, x: largeFairyX }}
          >
            <Image src={LargeFairy} alt="Large Fairy" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
