import Clock from "@/components/ui/countdown";

const Countdown = () => {
  return (
    <div className="inline-flex-col inline-block w-full rounded-lg bg-rosehack-yellow text-center font-rosehack-alt text-rosehack-brown">
      <div className="m-4 mb-0 text-2xl font-bold">HACKING ENDS IN</div>
      <Clock
        classNames={{
          digit: "text-rosehack-brown",
          background: "bg-white",
          unit: "text-rosehack-brown",
        }}
      />
    </div>
  );
};

export default Countdown;
