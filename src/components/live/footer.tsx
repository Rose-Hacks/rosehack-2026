"use client";
import Image from "next/image";
import { useTime, motion, useTransform } from "motion/react";
import FooterAsset from "@/public/engineering/landing/footer_asset.svg";
import MinimalLogo from "@/public/engineering/minimal_logo.svg";
import light from "@/public/engineering/landing/light.svg";
import SmallFairy from "@/public/engineering/landing/SmallFairy.svg";
import LargeFairy from "@/public/engineering/landing/LargeFairy.svg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
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
      className="relative w-full"
      style={{
        background: "linear-gradient(to bottom, #C6517F 0%, #98436B 100%)",
      }}
    >
      <Image
        src={light}
        alt="light"
        className="absolute z-50 hidden scale-95 sm:block"
      />
      <Image
        src={light}
        alt="light"
        className="absolute right-24 top-48 z-30 hidden scale-[0.7] sm:block"
      />
      <Image
        src={light}
        alt="light"
        className="absolute left-48 top-60 z-30 hidden scale-[0.7] md:block"
      />
      <Image
        src={light}
        alt="light"
        className="absolute bottom-96 right-20 z-30 hidden scale-[0.7] sm:block"
      />
      <motion.div
        className="absolute left-96 top-40 z-40 hidden md:block"
        style={{ y: largeFairyY, x: largeFairyX }}
      >
        <Image src={LargeFairy} alt="Small Fairy" />
      </motion.div>
      <motion.div
        className="absolute right-32 top-80 z-40 hidden sm:block"
        style={{ y: smallFairyY, x: smallFairyX }}
      >
        <Image src={SmallFairy} alt="Small Fairy" />
      </motion.div>
      <motion.div
        className="absolute bottom-80 left-80 z-40 hidden sm:block"
        style={{ y: smallFairyY, x: smallFairyX }}
      >
        <Image src={SmallFairy} alt="Small Fairy" />
      </motion.div>
      <motion.div
        className="absolute left-12 top-80 z-40 hidden sm:block"
        style={{ y: smallFairyY, x: smallFairyX }}
      >
        <Image src={SmallFairy} alt="Small Fairy" />
      </motion.div>
      <motion.div
        className="absolute bottom-80 left-80 z-40 hidden"
        style={{ y: smallFairyY, x: smallFairyX }}
      >
        <Image src={SmallFairy} alt="Small Fairy" />
      </motion.div>
      <Image
        src={FooterAsset}
        className="w-full"
        alt="pond, plants, and deer on the rosehack footer!"
      />
      <div className="absolute inset-x-0 bottom-10 z-40 flex flex-col items-center gap-2 text-white md:gap-5">
        <Image
          src={MinimalLogo}
          alt="minimal rosehack logo"
          className="size-10 object-contain md:size-auto"
        />
        <div className="flex flex-row gap-2 text-xl md:text-6xl">
          <Link
            href="mailto:mailto:rosehackucr@gmail.com"
            className="duration-200 hover:scale-105"
            target="_blank"
          >
            <MdEmail />
          </Link>
          <Link
            href="https://www.linkedin.com/company/rosehack/"
            className="duration-200 hover:scale-105"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.instagram.com/rosehackucr/"
            className="duration-200 hover:scale-105"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>
        <p className="w-11/12 text-center font-rosehack-main text-base">
          {"Made with <3 by the 2026 RoseHack team"}
        </p>
      </div>
    </div>
  );
};

export default Footer;
