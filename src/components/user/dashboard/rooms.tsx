import { Badge } from "@/components/ui/badge";

const rooms: string[] = ["WCH 12webp", "WCH 110", "WCH 130", "Byte", "WCH 129"];

const Rooms = (): React.ReactNode => {
  return (
    <div className="rounded-lg bg-white p-3 font-bold shadow-xl">
      <div className="p-2">🚪Hackrooms</div>
      <div className="flex gap-3">
        {rooms.map((room: string, index: number) => (
          <Badge key={index}>{room}</Badge>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
