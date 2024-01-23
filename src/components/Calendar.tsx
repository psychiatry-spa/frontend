import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Calendar = () => {
  const log = () => {
    if (start) {
      console.log(start + "\n" + end);
    }
  };
  const [start, setStart] = useState<Value>(new Date());
  const [end, setEnd] = useState<Value>(new Date());

  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label className="block mb-2 font-medium text-gray-900">
          Event name
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          id="name"
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2 font-medium text-gray-900">
          Event description
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          onChange={(e) => setEventDescription(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2 font-medium text-gray-900">
          Start Date
        </label>
        <DateTimePicker
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={setStart}
          value={start}
        />
      </div>
      <div>
        <label className="block mb-2 font-medium text-gray-900">End Date</label>
        <DateTimePicker
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={setEnd}
          value={end}
        />
        <button onClick={log}>Log editor content</button>
      </div>
    </div>
  );
};
