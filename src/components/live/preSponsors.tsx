import Image from "next/image";
import preSponsorBranch from "@/public/engineering/landing/preSponsorBranch.svg";

const PreSponsors = () => {
  return (
    <div className="bg-gradient-to-b from-[#F46055] to-[#9C6E6B]">
      <Image
        src={preSponsorBranch}
        alt="Branch with hanging lantern"
        className="justify-left m-0 h-[65vh] w-auto p-0 md:h-[80vh]"
      />
    </div>
  );
};

export default PreSponsors;
