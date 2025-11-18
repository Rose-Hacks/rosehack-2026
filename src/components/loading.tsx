import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#F55653] to-[#743B73]">
      <p className="text-3xl font-bold text-white">Loading...</p>
      <Loader className="animate-spin text-white" />
    </div>
  );
};

export default Loading;
