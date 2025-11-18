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

  const [state, setState] = useState(
    typeof object.roles[object.form] !== "undefined" && !bypass ? 0 : 1,
  );

  return (
    <div className="overflow-scroll-y font-poppins flex w-full flex-col items-center bg-gradient-to-b from-[#F55653] to-[#743B73]">
      <div className="mt-4 flex w-full flex-row justify-end space-x-4 pr-6">
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
              <Confirmation />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
