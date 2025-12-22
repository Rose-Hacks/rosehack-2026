import Image from "next/image";
import Title from "@/components/ui/title";

import hillsSmall from "@/public/engineering/landing/hills.svg";

import hillsLarge from "@/public/engineering/landing/hills4.svg";

// lg
import lgSignOne from "@/public/engineering/landing/lgSignOne.svg";
import lgSignTwo from "@/public/engineering/landing/lgSignTwo.svg";
import lgSignThree from "@/public/engineering/landing/lgSignThree.svg";
import lgSignFour from "@/public/engineering/landing/lgSignFour.svg";

// md
import signLeft from "@/public/engineering/landing/mdSignLeft.svg";
import signRight from "@/public/engineering/landing/mdSignRight.svg";

// sm
import sign from "@/public/engineering/landing/smSign.svg";

const Tracks = () => {
  return (
    <div className="relative flex h-[85vh] flex-col items-center overflow-y-hidden bg-[#F46055] md:h-[100vh]">
      <Title>Tracks</Title>
      <Image
        className="absolute z-0 hidden min-h-full w-full object-contain sm:flex"
        src={hillsLarge}
        alt="Hills background"
        fill
      />
      <Image
        className="absolute bottom-0 z-10 min-h-full w-full object-contain sm:hidden"
        src={hillsSmall}
        alt="Hills background"
        fill
      />
      <Image
        className="absolute bottom-[40%] z-10 h-1/2 w-min sm:hidden"
        src={sign}
        alt="Tracks Sign Four"
      />
      <Image
        className="absolute bottom-[37%] left-[20%] z-10 hidden h-[44%] w-min sm:block lg:hidden"
        src={signLeft}
        alt="Hills background"
      />
      <Image
        className="absolute bottom-[45%] right-[17%] z-10 hidden h-2/5 w-min sm:block lg:hidden"
        src={signRight}
        alt="Hills background"
      />
      <Image
        className="absolute bottom-[45%] right-[6%] z-10 hidden h-[35%] w-min lg:block"
        src={lgSignOne}
        alt="Tracks Sign One"
      />
      <Image
        className="absolute bottom-[52%] right-[31%] z-10 hidden h-[30%] w-min lg:block"
        src={lgSignTwo}
        alt="Tracks Sign Two"
      />
      <Image
        className="absolute bottom-[35%] left-[24%] z-10 hidden h-2/5 w-min lg:block"
        src={lgSignThree}
        alt="Tracks Sign Three"
      />
      <Image
        className="absolute bottom-[50%] left-[7%] z-10 hidden h-1/3 w-min lg:block"
        src={lgSignFour}
        alt="Tracks Sign Four"
      />
    </div>
  );
};

export default Tracks;
