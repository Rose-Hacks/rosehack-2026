import Image, { StaticImageData } from "next/image";

interface teamProp {
  name: string;
  image: StaticImageData;
  role: string;
}

const Member = ({ name, image, role }: teamProp) => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="mb-4 aspect-square w-3/4 overflow-hidden rounded-full md:w-1/2 cursor-pointer">
        <Image src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      <p className="text-2xl font-bold text-white">{name}</p>
      <p className="text-lg text-white">{role}</p>
    </div>
  );
};

export default Member;
