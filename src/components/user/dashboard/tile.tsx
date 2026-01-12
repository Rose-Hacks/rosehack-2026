import Link from "next/link";

interface props {
  icon: React.ReactNode;
  text: string;
  link: string;
}

const Tile = ({ icon, text, link }: props) => {
  return (
    <Link
      href={link}
      className="mb-3 flex w-full items-center gap-5 rounded bg-rosehack-yellow p-7 font-rosehack-alt text-rosehack-brown hover:opacity-70 md:my-0 md:w-1/2"
    >
      <div className="">{icon}</div>
      <div className="text-2xl font-bold leading-9">{text}</div>
    </Link>
  );
};

export default Tile;
