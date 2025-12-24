import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/public/engineering/smallLogo.svg";

const Participant = () => {
  return (
    <div className="overflow-scroll-y font-poppins absolute flex h-full w-full flex-col items-center overflow-x-hidden bg-gradient-to-b from-[#FA938C] to-[#456F74]">
      <div className="z-20 mt-4 flex w-full flex-row justify-end space-x-4 pr-6">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
      <div className="mx-auto flex w-2/3 flex-col justify-center gap-4 text-center text-white md:w-1/3">
        <Image src={LOGO} className="m-4 mx-auto w-1/2 md:w-1/3" alt="Logo" />
        <p className="w-full px-4 py-4 text-center font-rosehack-main text-4xl font-bold text-white">
          ROSEHACK 2026
        </p>
        <p className="pb-4">
          Welcome to RoseHack 2026! RoseHack 2026 is a UC Riverside&apos;s
          minority focused, 24-hour hackathon, and one of the few women-centric
          hackathons in California. RoseHack is hosted yearly by Women in
          Computing (WINC), a student organization on campus centered around
          supporting, celebrating, and advocating for women and other
          underrepresented groups in all aspects of the computing field. The
          event will take place on January 24, 2026.
        </p>

        <p className="pb-4">
          Participants are not required to stay the full duration of the event,
          but are encouraged to checkout the various events, workshops, and
          opportunities that are available. We will not be providing travel
          reimbursement at this time.
        </p>

        <p className="pb-4">
          We are currently performing some temporary changes to our application
          page; if you are interested in being involved, please send us an email
          at <span className="font-bold">rosehackucr@gmail.com</span> with your
          name, university, major, and resume.
        </p>
      </div>
    </div>
  );
};

export default Participant;
