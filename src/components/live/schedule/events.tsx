"use client";
import { GoogleEvent } from "@/types/calendar";
import { useState } from "react";

interface props {
  events: GoogleEvent[];
  totalDays: string[];
}

const Events = ({ events, totalDays }: props) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start.dateTime)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday",
  );

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mx-auto grid w-11/12 md:w-10/12 grid-cols-4 md:grid-cols-7 items-center justify-between space-x-0 md:space-x-5 rounded font-rosehack-alt text-xs md:text-base">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`flex justify-center rounded p-2 text-white focus:outline-none ${
              selectedDay === day
                ? "bg-[#4E2F19]"
                : "bg-gradient-to-b from-[#A8734D] to-[#715643]"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="mt-6 h-full w-10/12 font-rosehack-alt text-white">
        {events.filter(
          ({ start }) =>
            new Date(start.dateTime).toLocaleString("en-US", {
              timeZone: "America/Los_Angeles",
              weekday: "long",
            }) === selectedDay,
        ).length == 0 ? (
          <div className="flex flex-row justify-center text-lg font-semibold">
            No events Available
          </div>
        ) : (
          <>
            {events
              .filter(
                ({ start }) =>
                  new Date(start.dateTime).toLocaleString("en-US", {
                    timeZone: "America/Los_Angeles",
                    weekday: "long",
                  }) === selectedDay,
              )
              .map(({ start, summary, location }, index) => (
                <div
                  key={index}
                  className=" m-2 grid w-full grid-cols-2 items-center justify-center rounded bg-gradient-to-b from-[#A8734D] to-[#715643] px-4 py-3 text-base md:text-xl"
                >
                  <p className="flex w-full justify-left md:justify-center">{summary}</p>
                  {/* <p className="flex justify-center">
                    {description.split("\n")[0].slice(1)}
                  </p> */}
                  {/* <p className="flex justify-center">{location}</p> */}
                  <p className="flex justify-center">
                    {location} {" @ "}
                    {new Date(new Date(start.dateTime)).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: "America/Los_Angeles",
                      },
                    )}
                  </p>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
