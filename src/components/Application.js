//import React from "react";
import React, { useState, useEffect } from "react";

import DayList from "components/DayList";
import "components/Application.scss";
import Appointment from "components/Appointment/index";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay
}
  from "helpers/selectors";
import axios from "axios";



export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });


  const setDay = day => setState({ ...state, day });

  const dailyAppointments = getAppointmentsForDay(state, state.day)
  const interviewers = getInterviewersForDay(state, state.day);
  //console.log("app.js interviewers =", interviewers)

  const appointment = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
      />
    );
  });


  useEffect(() => {

    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {

      const days = all[0].data;
      const appointments = all[1].data;
      const interviewers = all[2].data;

      //console.log("all:", all[1].data)
      //console.log("this is the interviewers:", state.interviewers)
      setState((prev) => ({ ...prev, days, appointments, interviewers }));
      // setDay(all[0])
    })
  }, []);
 
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
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>
      <section className="schedule">
        {/* {console.log("state.appointments:", state.appointments)}
        { 
          //console.log("dailyAppointment from Application.js:", appointments);
          dailyAppointments.map((appointment) => {
            return (
              <Appointment
                key={appointment.id}
                 id={appointment.id}
                time={appointment.time}
                interview={appointment.interview}
                {...appointment}
              />
            )
          })
        }
         */}
        {appointment}
      </section>
    </main>
  );
}