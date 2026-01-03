import { SparklesCore } from "@/components/ui/shadcn-io/sparkles";
import Landing from "./landing";
import About from "./about";
// import Schedule from "./schedule";
import Tracks from "./tracks";
import PreSponsors from "./preSponsors";
import Sponsors from "./sponsors";
import Team from "./team";
// import Committees from "./committees";
import Judges from "./judges";
import FAQ from "./faq";
import Footer from "./footer";

const Live = () => {
  return (
    <div className="relative overflow-x-hidden">
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1.7}
        particleDensity={20}
        className="absolute inset-0 z-10 h-full w-full"
        particleColor="#FFFFFF"
        speed={0.7}
      />
      <div className="h-screen overflow-x-hidden overflow-y-hidden">
        <Landing />
      </div>
      <About />
      <Tracks />
      {/* <Schedule /> */}
      <PreSponsors />
      <Sponsors />
      {/* <Committees /> */}
      <Judges />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Live;
