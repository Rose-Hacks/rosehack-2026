import { Badge } from "@/components/ui/badge";

const rooms: string[] = [
  "WCH 127",
  "WCH 110",
  "WCH 205/206",
  "Bytes",
  "WCH 129",
];

const Rooms = (): React.ReactNode => {
  return (
    <div className="rounded-lg bg-rosehack-yellow p-3 font-bold text-rosehack-brown">
      <div className="p-2">HACKROOMS</div>
      <div className="flex gap-3">
        {rooms.map((room: string, index: number) => (
          <Badge
            className="text-xs font-light md:text-lg"
            type="pinkbrown"
            key={index}
          >
            {room}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
