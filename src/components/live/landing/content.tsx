import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Countdown from "@/components/ui/countdown";

const Content = () => {
  return (
    <div className="flex w-11/12 flex-col items-center gap-2 md:w-3/5 xl:w-2/5">
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl p-3">
        <div className="whitespace-nowrap rounded-3xl text-center font-rosehack-main text-lg text-white md:whitespace-normal md:text-6xl">
          ROSE HACK 2026
          <div className="m-3 flex items-center justify-center whitespace-nowrap rounded-3xl px-webp text-center text-lg md:whitespace-normal md:text-3xl">
            COMING SOON
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
          <div className="grid grid-cols-1 items-center justify-center gap-3 px-5 py-2 font-rosehack-alt duration-200 hover:scale-105">
            <Button className="border-rosehack-white/30 hover:border-rosehack-white/40 flex items-center justify-center rounded-xl border-4 bg-rosehack-yellow px-10 text-xl text-gray-800 duration-150 hover:cursor-pointer hover:bg-rosehack-yellow/80">
              <Link href="/apply/interest">Pre-Registration Form</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 items-center justify-center gap-3 px-5 py-2 font-rosehack-alt duration-200 hover:scale-105">
            <Button className="border-rosehack-white/30 hover:border-rosehack-white/40 flex items-center justify-center rounded-xl border-4 bg-rosehack-yellow px-10 text-xl text-gray-800 duration-150 hover:cursor-pointer hover:bg-rosehack-yellow/80">
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdVtPZdasZnfFXP1nskcVj3Boaz3iyafu5BRGJa_Y80mWQxhw/viewform"
              >
                Lead Application
              </Link>
            </Button>
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
