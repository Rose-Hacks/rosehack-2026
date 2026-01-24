import { api } from "@/utils/api";
import Events from "./events";
import Title from "@/components/ui/title";

const Schedule = async () => {
  const { items } = await api({
    url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    method: "GET",
  });

  const totalDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="flex w-full flex-col items-center space-y-10 bg-[#F46055]">
      <Title>Schedule</Title>
      <Events events={items} totalDays={totalDays} />
    </div>
  );
};

export default Schedule;
