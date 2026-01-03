import Title from "@/components/ui/title";
import Member from "./member";
import Teams from "@/data/team";

const Team = () => {
  return (
    <div className="h-auto bg-gradient-to-b from-[#F46055] to-[#DD586A] py-2 md:py-6">
      <div className="relative flex justify-center">
        <Title>Meet The Team</Title>
      </div>
      <div className="z-20 mx-8 flex flex-row flex-wrap justify-center md:place-items-center md:items-center">
        {Teams.map(({ name, image, role }, index) => (
          <div
            key={index}
            className="relative z-20 m-2 flex w-5/12 flex-col px-4 md:w-1/5 md:justify-center"
          >
            <Member name={name} role={role} image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
