import { ReactNode } from "react";
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface FooterTypes {
  icon: ReactNode;
  link: string;
}

export const FooterLinks: FooterTypes[] = [
  {
    icon: <MdEmail />,
    link: "mailto:mailto:rosehackucr@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/company/rosehack/",
  },
  {
    icon: <FaDiscord />,
    link: "https://discord.com/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/rosehackucr/",
  },
];
