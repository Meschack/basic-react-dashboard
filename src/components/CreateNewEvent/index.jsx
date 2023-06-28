import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../../styles/CreateNewEvent.css'

export const CreateNewEvent = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <Calendar onChange={onChange} value={value} locale="fr-FR" />
      <button className="create">
        <i className="far fa-calendar-plus"></i>
        <span>Create New Event</span>
      </button>
    </div>
  )
}
