import { Calendar, momentLocalizer, SlotInfo } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useCallback } from "react";
import "./calendarStyle.css"; // Подключение стилей

const localizer = momentLocalizer(moment);

interface ICalendarEvent {
  start: Date;
  end: Date;
  title: string;
}

export const CalendarComp = () => {
  const [events, setEvents] = useState<ICalendarEvent[]>([]);

  const handleSelectSlot = useCallback(({ start, end }: SlotInfo) => {
    const title = window.prompt("New Event Name");
    if (title) {
      setEvents((prev) => [...prev, { start, end, title }]);
    }
  }, []);

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week"]}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};
