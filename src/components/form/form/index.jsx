"use client";

import { useState } from "react";
import Status from "./status";
import Questions from "./questions";
import Confirmation from "./confirmation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import LOGO from "@/public/engineering/smallLogo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import light from "@/public/engineering/landing/light.svg";
import leafVine from "@/public/engineering/forms/leafVine.svg";
import shrub from "@/public/engineering/forms/shrub.svg";
import vine from "@/public/engineering/forms/vine.svg";
import vine2 from "@/public/engineering/forms/vine2.svg";
import mushroom from "@/public/engineering/forms/mushroom.svg";
import leaf from "@/public/engineering/forms/leaf.svg";

const Form = ({
  object,
  setObject,
  header,
  fields,
  onSubmit,
  statuses = {},
  bypass = false,
  packet = false,
}) => {
  const [loading, setLoading] = useState(false);

  const isJudgeApplication = header === "JUDGE APPLICATION";

  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1,
  );

  return (
    <div className="overflow-scroll-y font-poppins absolute flex h-full w-full flex-col items-center overflow-x-hidden bg-gradient-to-b from-[#FA938C] to-[#456F74]">
      <Image
        src={leafVine}
        className="absolute left-12 z-10 scale-[1] md:scale-[2]"
        alt="leaf"
      />
      <Image
        src={light}
        className="absolute left-20 z-10 scale-[0.3]"
        alt="leaf"
      />
      <Image src={shrub} className="absolute left-20 scale-[1.5]" alt="shrub" />
      <Image
        src={light}
        className="invisible absolute md:visible md:-left-2 md:top-44 md:scale-[0.4]"
        alt="light"
      />
      <Image
        src={vine}
        className="absolute -right-8 md:right-20 md:scale-[1.5]"
        alt="vine"
      />
      <Image
        src={vine2}
        className="absolute -right-12 md:right-8 md:scale-[2]"
        alt="vine"
      />
      <Image
        src={light}
        className="absolute right-20 scale-[0.5]"
        alt="light"
      />
      <Image
        src={light}
        className="md: invisible absolute scale-[0.75] md:visible md:right-4 md:top-1/4"
        alt="light"
      />
      <Image
        src={light}
        className="md: invisible absolute mr-8 scale-[0.75] md:visible md:-left-16 md:top-3/4"
        alt="light"
      />
      <div className="z-20 mt-4 flex w-full flex-row justify-end space-x-4 pr-6">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button onClick={() => signOut({ callbackUrl: "/", redirect: true })}>
          Sign Out
        </Button>
      </div>
      <div className="flex w-10/12 flex-col items-center pb-8 pt-5 md:w-1/2 xl:w-1/3">
        <Image src={LOGO} className="m-4 w-1/5" alt="Logo" />
        <p className="w-full px-4 py-4 text-center font-rosehack-main text-4xl font-bold text-white">
          ROSEHACK 2026
        </p>
        <p className="w-full rounded-lg bg-[#522E22] px-4 py-4 text-center font-rosehack-main text-3xl text-white">
          {header}
        </p>
        <div className="w-full rounded-lg bg-transparent p-8">
          <Image
            src={mushroom}
            className="invisible absolute md:visible md:-left-16 md:top-1/3 md:scale-[0.75]"
            alt="mushroom"
          />
          <Image
            src={leaf}
            className="invisible absolute md:visible md:-right-8 md:top-2/3 md:scale-[1.25]"
            alt="mushroom"
          />
          <div className="grid grid-cols-1 gap-3">
            {state === 0 ? (
              <Status object={object} statuses={statuses} setState={setState} />
            ) : state === 1 ? (
              <Questions
                loading={loading}
                setLoading={setLoading}
                object={object}
                setObject={setObject}
                fields={fields}
                onSubmit={onSubmit}
                setState={setState}
                packet={packet}
              />
            ) : (
              <Confirmation judge={isJudgeApplication ? "true" : undefined} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
