import Title from "@/components/ui/title";
import Member from "./member";
import Teams from "@/data/team";

const Team = () => {
  return (
    <div
      className="h-auto py-2 md:py-6 bg-gradient-to-b from-[#F46055] to-[#DD586A]"
    >
      <div className="relative flex justify-center">
        <Title>Meet The Team</Title>
      </div>
      <div className="z-20 mx-4 flex flex-col place-items-center md:mx-8 md:flex-row md:flex-wrap md:items-center md:justify-center">
        {Teams.map(({ name, image, role }, index) => (
          <div
            key={index}
            className="relative z-20 m-2 flex w-10/12 flex-col items-center justify-center lg:w-1/4"
          >
            <Member name={name} role={role} image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
