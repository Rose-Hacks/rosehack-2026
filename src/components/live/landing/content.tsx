import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Countdown from "@/components/ui/countdown";

const Content = () => {
  return (
    <div className="flex w-11/12 flex-col items-center gap-2 md:w-3/5 xl:w-2/5">
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl p-3">
        <div className="whitespace-nowrap rounded-3xl text-center font-rosehack-main text-lg text-white md:whitespace-normal md:text-6xl">
          ROSEHACK 2026
          <div className="m-3 flex items-center justify-center whitespace-nowrap rounded-3xl px-7 text-center text-lg md:whitespace-normal md:text-3xl">
            January 24-25
          </div>
          <Countdown
            classNames={{
              unit: "text-white",
              background: "bg-white/20",
              digit: "text-white",
            }}
          />
        </div>
        <div className="flex-col md:flex-row">
          <div className="items-center justify-center gap-3 px-5 py-1 font-rosehack-alt duration-200 hover:scale-105">
            <Link target="_blank" href="/application/participant">
              <Button className="border-rosehack-white/30 hover:border-rosehack-white/40 flex w-full items-center justify-center rounded-xl border-4 bg-rosehack-yellow px-10 text-xl text-gray-800 duration-150 hover:cursor-pointer hover:bg-rosehack-yellow/80">
                Apply Now!
              </Button>
            </Link>
          </div>
          {/* <div className="items-center justify-center gap-3 px-5 py-1 font-rosehack-alt duration-200 hover:scale-105">
            <Link target="_blank" href="/sponsorship/Packet.pdf">
              <Button className="border-rosehack-white/30 hover:border-rosehack-white/40 flex w-full items-center justify-center rounded-xl border-4 bg-rosehack-yellow px-10 text-xl text-gray-800 duration-150 hover:cursor-pointer hover:bg-rosehack-yellow/80">
                Sponsorship Packet
              </Button>
            </Link>
          </div> */}
          <div className="items-center justify-center gap-3 px-5 py-1 font-rosehack-alt duration-200 hover:scale-105">
            <Link target="_blank" href="/application/judge">
              <Button className="border-rosehack-white/30 hover:border-rosehack-white/40 flex w-full items-center justify-center rounded-xl border-4 bg-rosehack-yellow px-10 text-xl text-gray-800 duration-150 hover:cursor-pointer hover:bg-rosehack-yellow/80">
                Judge Application
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-3 text-white">
          <Link
            href="https://www.instagram.com/rosehackucr/"
            className="duration-200 hover:scale-105"
          >
            <InstagramIcon className="size-9 md:size-10" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/33212536"
            className="duration-200 hover:scale-105"
          >
            <LinkedinIcon className="size-9 md:size-10" />
          </Link>
          <Link
            href="mailto:rosehackucr@gmail.com"
            className="duration-200 hover:scale-105"
          >
            <MailIcon className="size-9 md:size-10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
