import Title from "@/components/ui/title";
import Member from "./member";
import Sponsors from "@/data/sponsors";

const Sponsor = () => {
  return (
    <div className="h-auto bg-gradient-to-b from-[#9C6E6B] to-[#41675c]">
      <div className="relative flex justify-center">
        <Title>Sponsors</Title>
      </div>
      <div className="z-20 mx-8 flex flex-row flex-wrap justify-center md:place-items-center md:items-center">
        {Sponsors.map(({ name, image }, index) => (
          <div
            key={index}
            className="relative z-20 m-2 flex w-5/12 flex-col px-4 md:justify-center lg:w-1/5"
          >
            <Member name={name} image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
