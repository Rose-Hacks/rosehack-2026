import Image from "next/image";
import Title from "@/components/ui/title";
import hillsSmall from "@/public/engineering/landing/hills.svg";

import hillsLarge from "@/public/engineering/landing/hills4.svg";

const Tracks = () => {
  return (
    <div className="relative flex h-[85vh] flex-col items-center overflow-y-hidden bg-[#F46055] md:h-[100vh]">
      <Title>Tracks</Title>
      <div></div>
      <Image
        className="absolute z-10 hidden min-h-full w-full object-contain md:flex lg:h-fit"
        src={hillsLarge}
        alt="Hills background"
        fill
      />
      <Image
        className="absolute bottom-0 z-10 min-h-full w-full object-contain md:hidden lg:h-fit"
        src={hillsSmall}
        alt="Hills background"
        fill
      />
    </div>
  );
};

export default Tracks;
