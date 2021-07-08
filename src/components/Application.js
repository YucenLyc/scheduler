//import React from "react";
import React, { useState, useEffect } from "react";

import DayList from "components/DayList";
import "components/Application.scss";
import Appointment from "components/Appointment";
import axios from "axios";



const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "5pm",
  },
  {
    id: 4,
    time: "6pm",
  },
  {
    id: 5,
    time: "2pm",
    interview: {
      student: "Dwlight Schrute",
      interviewer: {
        id: 1,
        name: "Jim Halpert",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }

];

export default function Application(props) {
  const [selectedDay, setSelectedDay] = useState({
    day:"Monday",
    days:[],
  });

  const [days, setDays] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/api/days')
    .then(res => {
      //console.log("This is the msg:", res)
      setDays(res.data);
    })
  })
  return (
    <main className="layout">
      <section className="sidebar">

        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            selectedDay={selectedDay}
            setDay={setSelectedDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>
      <section className="schedule">
        {/* map over the appointment array to create a list in the schedule section */}
        {appointments.map(appointment => (
          <Appointment key="appointment.id" {...appointment} />)
        )}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

