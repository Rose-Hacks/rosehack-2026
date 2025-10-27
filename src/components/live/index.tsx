import { SparklesCore } from "@/components/ui/shadcn-io/sparkles";
import Landing from "./landing";
import About from "./about";
// import Schedule from "./schedule";
// import Tracks from "./tracks";
// import Sponsors from "./sponsors";
import Team from "./team";
// import Committees from "./committees";
// import Judges from "./judges";
// import FAQ from "./faq";
import Footer from "./footer";

const Live = () => {
  return (
    <>
      <div className="relative h-screen overflow-x-hidden overflow-y-hidden">
        <Landing />
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.7}
          particleDensity={45}
          className="absolute inset-0 z-50 h-full w-full"
          particleColor="#FFFFFF"
          speed={0.7}
        />
      </div>
      <div className="relative">
        <About />
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.7}
          particleDensity={25}
          className="absolute inset-0 z-50 h-full w-full"
          particleColor="#FFFFFF"
          speed={0.7}
        />
      </div>
      {/* <Tracks />
      <Schedule />
      <Sponsors /> */}
      <div className="relative">
        <Team />
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.7}
          particleDensity={25}
          className="absolute inset-0 h-full w-full"
          particleColor="#FFFFFF"
          speed={0.7}
        />
      </div>
      {/* <Committees />
      <Judges />
      <FAQ /> */}
      <div className="relative">
        <Footer />
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.7}
          particleDensity={45}
          className="absolute inset-0 h-full w-full"
          particleColor="#FFFFFF"
          speed={0.7}
        />
      </div>
    </>
  );
};

export default Live;
