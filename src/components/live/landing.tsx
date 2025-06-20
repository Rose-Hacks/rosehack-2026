import Image from "next/image";
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
      <a
        id="mlh-trust-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-[90px] top-0 z-[10000] block w-[10%] min-w-[60px] max-w-[100px]"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          className="w-full"
          width={100}
          height={100}
        />
      </a>

      <Image src={tree1} alt="tree" className="absolute left-0 z-50" />
      <Image src={bush} alt="bush" className="absolute bottom-0 left-10 z-30" />
      <Image src={path} alt="path" className="absolute bottom-0 left-10 z-20" />
      <Image
        src={treeBackground1}
        alt="tree"
        className="absolute -top-4 left-2 z-0 scale-125"
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
      <div className="absolute top-32 z-50 flex w-fit flex-col items-center justify-center gap-4 md:top-36 md:w-full">
        <Image src={Logo} alt="Rose Hack Logo" className="w-1/12" />
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
        className="absolute -right-[170px] top-52 z-50 scale-[0.7]"
      />
      <Image
        src={light}
        alt="light"
        className="absolute -bottom-5 right-20 z-50 scale-[0.7]"
      />
      <Image src={tree2} alt="tree" className="absolute right-0 z-30" />
      <Image
        src={treeBackground2}
        alt="tree"
        className="absolute right-0 z-10"
      />
      <Image
        src={bush}
        alt="bush"
        className="absolute -right-10 bottom-0 z-20 scale-x-[-1]"
      />
    </div>
  );
};

export default Landing;
