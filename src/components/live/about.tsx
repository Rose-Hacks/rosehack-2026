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
    (latest) => Math.sin((latest + 1500) / 1400) * 10,
  );
  const largeFairyX = useTransform(
    time,
    (latest) => Math.cos(latest / 1600) * 5,
  );
  return (
    <div
      className="bg-linear-to-b flex items-center justify-center from-[#243B3D] to-[#F46055] py-8"
      style={{
        background:
          "linear-gradient(to bottom, #243B3D 0%, #416D70 31%, #AA7F7B 71%, #F46055 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="flex w-3/4 flex-col gap-4 font-rosehack-main text-lg text-white md:w-2/3 md:text-xl">
          <div className="flex items-center justify-evenly md:items-start md:justify-start">
            <Title>About Us</Title>
            <Image
              src={Bottle}
              alt="Bottle"
              className="w-24 flex-shrink-0 rotate-[0.4rad] md:hidden"
            />
          </div>
          <p className="z-20 pt-4">
            {`RoseHack is UC Riverside’s minority focused, 24-hour hackathon, and one of
the few women-centric hackathons in California. RoseHack is hosted yearly
by Women in Computing (WINC), a student organization on campus centered
around supporting, celebrating, and advocating for women and other
underrepresented groups in all aspects of the computing field.`}
          </p>
          <p className="z-20">
            {`Our mission here at Rosehack is to support and cultivate the next generation of women in tech. Our theme this year is "SHE-nnovation for Good", centering around projects that celebrate and uplift women's roles in innovation.`}
          </p>
        </div>
        <div className="relative hidden w-3/4 items-center justify-center md:flex md:w-1/4">
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
