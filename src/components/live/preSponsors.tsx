import Image from "next/image";
import preSponsorBranch from "@/public/engineering/landing/preSponsorBranch.svg";

const PreSponsors = () => {
  return (
    <div className="bg-gradient-to-b from-[#F46055] to-[#417C80]">
      <Image
        src={preSponsorBranch}
        alt="Branch with hanging lantern"
        className="justify-left m-0 h-auto w-auto p-0 md:h-[90vh]"
      />
    </div>
  );
};

export default PreSponsors;
