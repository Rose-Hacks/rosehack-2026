import Image from "next/image";
import postJudgeBranch from "@/public/engineering/landing/postJudgeBranch.svg";
import leaves from "@/public/engineering/landing/leaves.svg";
import plant from "@/public/engineering/landing/plant.svg";
import Title from "@/components/ui/title";
import Member from "./member";
import JudgeNames from "@/data/judges";
import NidhiSharma from "@/public/engineering/landing/judges/Nidhi_Sharma.webp";

const Judges = () => {
  return (
    <div className="relative bg-[#F46055] xl:pb-12">
      <div className="relative bg-gradient-to-b from-[#41675c] to-[#415237] pb-16 md:pb-24">
        <div className="relative flex justify-center pt-8">
          <Title>Keynote Speaker</Title>
        </div>
        <div className="z-20 mx-8 flex flex-row flex-wrap justify-center">
          <div className="relative z-20 m-2 mx-8 flex w-5/12 flex-col px-4 lg:w-1/5">
            <Member
              name="Nidhi Sharma"
              image={NidhiSharma}
              role="Senior Software Engineering Leader @ Cox Automotive"
            />
          </div>
        </div>
        <div className="relative flex justify-center pt-8">
          <Title>Judges</Title>
        </div>
        <Image
          src={plant}
          alt="Green and pink leaf plant"
          className="absolute -left-40 -top-10 m-0 scale-[0.8] p-0 md:h-[70vh]"
        />
        <div className="z-20 mx-8 flex flex-row flex-wrap justify-center">
          {JudgeNames.map(({ name, image, role }, index) => (
            <div
              key={index}
              className="relative z-20 m-2 flex w-5/12 flex-col px-4 lg:w-1/5"
            >
              <Member name={name} image={image} role={role} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-0 h-72 bg-gradient-to-b from-[#415237] to-[#41523700] md:h-96">
        <Image
          src={postJudgeBranch}
          alt="Base of tree with leaves"
          className="absolute bottom-0 left-0 m-0 h-auto w-auto p-0 md:h-[70vh]"
        />
        <Image
          src={leaves}
          alt="Pile of leaves"
          className="absolute -bottom-40 -right-72 m-0 hidden h-auto w-auto scale-[0.5] p-0 md:block md:h-[70vh]"
        />
      </div>
    </div>
  );
};

export default Judges;
