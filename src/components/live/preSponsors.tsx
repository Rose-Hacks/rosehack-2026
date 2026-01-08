"use client";
import Image from "next/image";
import leavesFalling from "@/public/engineering/landing/leavesFalling.svg";
import preSponsorBranch from "@/public/engineering/landing/preSponsorBranch.svg";

const PreSponsors = () => {
  return (
    <div className="relative flex-col bg-gradient-to-b from-[#F46055] to-[#9C6E6B]">
      <Image
        src={leavesFalling}
        alt="Pile of leaves"
        className="absolute -right-96 top-32 m-0 hidden scale-[0.7] p-0 sm:block md:h-[50vh]"
      />
      <Image
        src={preSponsorBranch}
        alt="Branch with hanging lantern"
        className="justify-left m-0 h-[35vh] w-auto p-0 md:h-[50vh]"
      />
    </div>
  );
};

export default PreSponsors;
