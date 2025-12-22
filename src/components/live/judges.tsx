import Image from "next/image";
import postJudgeBranch from "@/public/engineering/landing/postJudgeBranch.svg";

const Judges = () => {
  return (
    <div className="relative h-[65vh] bg-[#F46055] pb-4">
      <div className="relative h-3/5 bg-gradient-to-b from-[#41675c] to-[#415237]" />
      <div className="relative h-2/5 bg-gradient-to-b from-[#415237] to-[#41523700]" />
      <Image
        src={postJudgeBranch}
        alt="Base of tree with leaves"
        className="justify-left absolute bottom-0 m-0 h-auto w-auto p-0 md:h-[70vh]"
      />
    </div>
  );
};

export default Judges;
