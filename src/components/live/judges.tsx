import Image from "next/image";
import postJudgeBranch from "@/public/engineering/landing/postJudgeBranch.svg";

import Title from "@/components/ui/title";
import Member from "./member";
import JudgeNames from "@/data/judges";

const Judges = () => {
  return (
    <div className="relative bg-[#F46055]">
      <div className="relative bg-gradient-to-b from-[#41675c] to-[#415237] pb-16 md:pb-24">
        <div className="relative flex justify-center pt-8">
          <Title>Judges</Title>
        </div>
        <div className="z-20 mx-8 flex flex-row flex-wrap justify-center">
          {JudgeNames.map(({ name, image, role }, index) => (
            <div
              key={index}
              className="relative z-20 m-2 flex w-5/12 flex-col px-4 md:w-1/5"
            >
              <Member name={name} image={image} role={role} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-0 h-24 bg-gradient-to-b from-[#415237] to-[#41523700] sm:h-72 md:h-96">
        <Image
          src={postJudgeBranch}
          alt="Base of tree with leaves"
          className="absolute bottom-0 left-0 m-0 h-auto w-auto p-0 md:h-[70vh]"
        />
      </div>
    </div>
  );
};

export default Judges;
