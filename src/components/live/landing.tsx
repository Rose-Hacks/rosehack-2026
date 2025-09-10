import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/engineering/logo.svg";
import Content from "./landing/content";

import tree1 from "@/public/engineering/landing/tree1.svg";
import tree2 from "@/public/engineering/landing/tree2.svg";
import treeBackground1 from "@/public/engineering/landing/tree_background1.svg";
import treeBackground2 from "@/public/engineering/landing/tree_background2.svg";
import light from "@/public/engineering/landing/light.svg";
import bush from "@/public/engineering/landing/bush.svg";
import path from "@/public/engineering/landing/path.svg";

const Landing = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#F77652] via-[#F55654] to-[#98436B]">
      <Link
        id="mlh-trust-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
        className="z-1 absolute right-3 top-0 z-50 w-12 cursor-pointer md:w-28 lg:right-10"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          className="w-full cursor-pointer"
          width={100}
          height={100}
        />
      </Link>

      <Image
        src={bush}
        alt="bush"
        className="absolute -bottom-20 left-0 z-50 sm:bottom-0"
      />
      <Image
        src={path}
        alt="path"
        className="absolute bottom-0 z-40 hidden min-w-full sm:block"
      />
      <Image
        src={tree1}
        alt="tree"
        className="absolute left-2 z-20 hidden h-screen w-1/4 scale-125 object-contain md:top-0 md:block lg:-top-0 xl:-top-20"
      />
      <Image
        src={treeBackground1}
        alt="tree background"
        className="absolute -top-10 left-2 z-10 hidden h-screen w-1/4 scale-125 object-contain md:block"
      />

      <Image
        src={light}
        alt="light"
        className="absolute -left-[100px] top-52 z-0 scale-[0.7]"
      />
      <Image
        src={light}
        alt="light"
        className="absolute -top-40 left-10 z-50 scale-[0.7]"
      />
      <div className="absolute z-50 flex w-fit flex-col items-center justify-center gap-4 md:w-full">
        <Image src={Logo} alt="Rose Hack Logo" className="w-1/5 sm:w-1/12" />
        <Content />
      </div>
      <Image
        src={light}
        alt="light"
        className="absolute -top-20 right-2 z-50 scale-[0.4]"
      />
      <Image
        src={light}
        alt="light"
        className="absolute -right-[170px] top-52 z-50 hidden scale-[0.7] sm:block"
      />
      <Image
        src={light}
        alt="light"
        className="absolute -bottom-5 right-20 z-50 hidden scale-[0.7] sm:block"
      />
      <Image
        src={tree2}
        alt="tree"
        className="absolute -top-10 right-2 z-20 hidden h-screen w-1/4 scale-125 object-contain md:block xl:-top-20"
      />
      <Image
        src={treeBackground2}
        alt="tree"
        className="absolute -right-0 -top-0 z-10 hidden h-screen w-1/5 scale-125 object-contain md:block"
      />
      <Image
        src={bush}
        alt="bush"
        className="absolute -right-10 bottom-0 z-50 hidden scale-x-[-1] sm:block"
      />
    </div>
  );
};

export default Landing;
