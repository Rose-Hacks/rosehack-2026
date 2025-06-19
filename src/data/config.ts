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
  name: "Rosehack 2026",
  short_name: "Rosehack 2026 Site",
  email: "rosehackucr@gmail.com",
  description: "Women Centric Hackathon",
  length: 24,
  date: new Date("2026-01-25T13:20:00"),
  end: new Date("2026-01-26T13:20:00"),
  packet: "",
  devpost: "https://devpost.com/",
  domain: "https://www.rosehack.com",
  instagram: "https://www.instagram.com",
  linkedin: "https://www.linkedin.com",
  discord: "https://www.discord.com",
  heart: "🤎",
};

export default data;
