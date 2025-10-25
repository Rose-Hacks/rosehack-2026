import Title from "@/components/ui/title";
import Member from "./member";
import Teams from "@/data/team";

const Team = () => {
  return (
    <div
      className="py-2 md:py-6"
      style={{
        background: "linear-gradient(to bottom, #F46055 0%, #C6517F 100%)",
      }}
    >
      <div className="flex justify-center">
        <Title>Meet The Team</Title>
      </div>
      <div className="mx-4 flex flex-col place-items-center md:mx-8 md:flex-row md:flex-wrap md:items-center md:justify-center">
        {Teams.map(({ name, image, role }, index) => (
          <div
            key={index}
            className="relative m-2 flex w-10/12 cursor-pointer flex-col items-center justify-center lg:w-1/4"
          >
            <Member name={name} role={role} image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
