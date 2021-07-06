import React from "react";

import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  // const onChange = (value1) => {
  //   console.log(value1)
  // }
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{props.interviewers.map(interviewer =>
        <InterviewerListItem
          key={interviewer.id}
          id={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar}
          selected={interviewer.id === props.interviewerSelected}
          setInterviewer={() => console.log(interviewer.id)}
        />    
      )}
      </ul>
    </section>
  )
}