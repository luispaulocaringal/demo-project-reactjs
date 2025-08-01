import { useState } from 'react';
import ReactCalendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendar() {
  const [date, setDate] = useState<Value>(new Date());

  return (
    <>
     <ReactCalendar className="w-100 h-100 calendar rounded border-0 shadow" value={date} onChange={setDate} />
    </>
  )
}

export default Calendar;