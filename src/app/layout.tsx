/* eslint-disable new-cap */
import "./globals.css";
import { Solway } from "next/font/google";
import { Inclusive_Sans as InclusiveSans } from "next/font/google";

const solway = Solway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-rosehack-main",
});

const sans = InclusiveSans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-rosehack-alt",
});

export const metadata = {
  title: "Rosehack 2026",
  description: "Rosehack is a 24 Hour Women Centric Hackathon hosted by UCR.",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${solway.variable} ${sans.variable} flex h-full w-full flex-col overflow-x-hidden lg:flex-row`}
      >
        <div className="flex h-full w-full">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
