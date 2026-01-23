import Events from "./events";
import Title from "@/components/ui/title";

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

const Schedule = async () => {
  const results = await (async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
      );

      if (!res.ok) {
        console.warn(`Failed to fetch calendar`);
        return [];
      }

      const data = await res.json();

      return (data.items || []).map((item: GoogleEventProps) => ({
        ...item,
      }));
    } catch (err) {
      console.error(`Error fetching events`, err);
      return [];
    }
  })();

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
      <Events events={results} totalDays={totalDays} />
    </div>
  );
};

export default Schedule;
