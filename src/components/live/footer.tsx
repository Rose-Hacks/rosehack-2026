"use client";

import Image from "next/image";
import FooterAsset from "@/public/engineering/landing/footer_asset.svg";
import MinimalLogo from "@/public/engineering/minimal_logo.svg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LargeFairy from "@/public/engineering/landing/LargeFairy.svg";
import Link from "next/link";
import { useTime, motion, useTransform } from "motion/react";

const Footer = () => {
  const time = useTime();
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
      <motion.div className="pl-6" style={{ y: largeFairyY, x: largeFairyX }}>
        <Image src={LargeFairy} alt="Large Fairy" />
      </motion.div>
      <Image
        src={FooterAsset}
        className="w-full"
        alt="pond, plants, and deer on the rosehack footer!"
      />
      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-2 text-white md:gap-5">
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
