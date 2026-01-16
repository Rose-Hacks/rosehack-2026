import { useState } from "react";

interface props {
  onFilterChange: (value: "all" | "hackweek" | "hackathon") => void;
}

const Toolbar = ({ onFilterChange }: props) => {
  const [selected, setSelected] = useState("all");

  return (
    <div className="flex items-center justify-end pr-4 font-rosehack-main">
      <div className="flex rounded bg-rosehack-yellow p-1">
        <button
          onClick={() => {
            setSelected("all");
            onFilterChange("all");
          }}
          className={`m-0.5 px-3 py-1 ${
            selected === "all"
              ? "rounded bg-rosehack-pinkbrown text-white"
              : "bg-rosehack-yellow text-rosehack-brown"
          }`}
        >
          All Events
        </button>
        <button
          onClick={() => {
            setSelected("hackweek");
            onFilterChange("hackweek");
          }}
          className={`m-0.5 px-3 py-1 ${
            selected === "hackweek"
              ? "rounded bg-rosehack-pinkbrown text-white"
              : "bg-rosehack-yellow text-rosehack-brown"
          }`}
        >
          HackWeek
        </button>
        <button
          onClick={() => {
            setSelected("hackathon");
            onFilterChange("hackathon");
          }}
          className={`m-0.5 px-3 py-1 ${
            selected === "hackathon"
              ? "rounded bg-rosehack-pinkbrown text-white"
              : "bg-rosehack-yellow text-rosehack-brown"
          }`}
        >
          Hackathon
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
