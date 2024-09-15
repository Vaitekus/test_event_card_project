import './App.css';
import React from "react";
import EventCard from "./componets/EventCard/EventCard";

const events = [
  {
    type: "popular",
    badgeText: "Hot Event",
    title: "Daniel Arends",  
    tourName: "20 jaar Ashton Brothers",
    
    /*date: "2018-07-07", Should be destructuring for weekday, day, mouth, year */
    weekday: "Weekday",
    day: "xx",
    month: "Month",
    year: "Year",
    
    time: "XX:XX" ,
    venue: "Venue", 
    city: "City", 
    country: "Country"
  },
  {
    type: "default",
    badgeText: "",
    title: "Daniel Arends",
    tourName: "20 jaar Ashton Brothers",

    /*date: "2018-07-07", Should be destructuring for weekday, day, mouth, year */
    weekday: "Weekday",
    day: "xx",
    month: "Month",
    year: "Year",

    time: "XX:XX" ,
    venue: "Venue",
    city: "City",
    country: "Country"
  }
];

function App() {
  return (
    <div className="container mx-auto p-4 pt-5 max-w-[912px]">
        {events.map((event, index) => <EventCard key={index} event={event}/>)}
    </div>
  );
}

export default App;
