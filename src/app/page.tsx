import Release from "@/components/release";
import RELEASES from "@/data/releases";
import Live from "@/components/live";

const Page = () => {
  return (
    <div
      className="w-full"
      style={{
        background: "linear-gradient(to right, #F77652, #F55654, #98436B)",
      }}
    >
      <Release release={RELEASES["/"]}>
        <Live />
      </Release>
    </div>
  );
};

export default Page;

export const dynamic = "force-dynamic";
