import React from "react";
import DayListItem from "components/DayListItem";

export default function Daylist({days, propDay, setDay} = this.props) {
  
  return (
    <ul>
    {days.map(day => (
        <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === propDay}
        setDay = {setDay}
        />
    
    ))}  
  </ul>
  );
}