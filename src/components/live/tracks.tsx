import Image from "next/image";
import Title from "@/components/ui/title";

import hillsSmall from "@/public/engineering/landing/hills.svg";
import hillsLarge from "@/public/engineering/landing/hills4.svg";
import signLeft from "@/public/engineering/landing/signLeft.svg";
import signRight from "@/public/engineering/landing/signRight.svg";

const Tracks = () => {
  return (
    <div className="relative flex h-[85vh] flex-col items-center overflow-y-hidden bg-[#F46055] md:h-[100vh]">
      <Title>Tracks</Title>
      <div></div>
      <Image
        className="absolute z-0 hidden min-h-full w-full object-contain md:flex lg:h-fit"
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
      <Image
        className="absolute bottom-[37%] left-[20%] z-10 h-[44%]"
        src={signLeft}
        alt="Hills background"
      />
      <Image
        className="absolute bottom-[45%] right-[26%] z-10 h-2/5"
        src={signRight}
        alt="Hills background"
      />
    </div>
  );
};

export default Tracks;
