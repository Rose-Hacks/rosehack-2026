"use client";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between font-rosehack-main text-3xl">
      <div className="flex flex-row gap-2">
        <p className="font-medium">Welcome,</p>
        <p className="mb-0 font-bold">{session?.user?.firstName}</p>
      </div>
    </div>
  );
};
export default Header;
