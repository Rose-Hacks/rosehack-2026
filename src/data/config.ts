type config = {
  name: string;
  short_name: string;
  email: string;
  description: string;
  length: number;
  date: Date;
  end: Date;
  packet: string;
  devpost: string;
  domain: string;
  instagram: string;
  linkedin: string;
  discord: string;
  heart: string;
};

const data: config = {
  name: "RoseHack 2026",
  short_name: "RoseHack 2026 Site",
  email: "rosehackucr@gmail.com",
  description:
    "UC Riverside's minority focused, 24-hour hackathon, and one of the few women-centric hackathons in California. RoseHack is hosted yearly by Women in Computing (WINC), a student organization on campus centered around supporting, celebrating, and advocating for women and other underrepresented groups in all aspects of the computing field.",
  length: 24,
  date: new Date("2026-01-24T13:20:00"),
  end: new Date("2026-01-25T13:20:00"),
  packet: "",
  devpost: "https://rosehack.devpost.com/",
  domain: "https://www.rosehack.com",
  instagram: "https://www.instagram.com/rosehackucr/",
  linkedin: "https://www.linkedin.com/company/rosehack/",
  discord: "https://discord.gg/Y3K23xgeQy",
  heart: "🤎",
};

export default data;
