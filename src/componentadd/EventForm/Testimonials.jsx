import React from "react";
import sec21 from "./photo1.jpg"
import sec22 from "./photo2.jpg"
import sec23 from "./photo3.jpg"
import sec24 from "./photo4.jpg"
import sec25 from "./photo5.jpg"
import { useState, useEffect } from "react";
import './Testimonials.css'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [sec21, sec22,sec23,sec24,sec25];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    const data = [
      {
        head: "Efficient Event Planning 1",
        description: `"A good Event Planner is ambitious and optimistic with strong persuasive skills to match their motivational nature. 
           They have excellent leadership, budgeting, multitasking, and negotiating skills."`},
            {
        head: "Efficient Event Planning 2",
        description: `"Event Planner to produce events from conception through to completion. Event Coordinator responsibilities include 
        providing outstanding customer service and organizing memorable events that meet quality expectations."`},
    {
        head: "Efficient Event Planning 3",
        description: `"Event Planners can work in various industries like weddings or conferences, and they can work independently or for a company. 
        They usually work directly with an Event Coordinator or Hospitality Manager."`},
           {
            head: "Efficient Event Planning 4",
            description: `"The Event Planner is responsible for coordinating all of the moving parts involved in ensuring 
            events go smoothly, including choosing venues"`},
               {
                head: "Efficient Event Planning 5",
                description: `"Efficient Event Planning
                   Plan and organize events with ease using our intuitive event management platform."`},
              ]

    return (
        <div className="sec2">
            <h3>TESTIMONIAL</h3>
            <div className="slider">
                <br />
                Exceptional experience! Our guests have raved since the event on the location, food and decor. <br /> All we had to do was show up.  We couldn't have been more pleased! <br />
                <br />
                <div className="slider-top">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="mySlides"
                            style={{ display: index === currentIndex ? "block" : "none" }}
                        >
                            <img src={slide} className="t-img" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                {/* down menu */}
                <div className="slider-down">
                    {data.map((data, index) => (
                        <div
                            key={index}
                            style={{ display: index === currentIndex ? "block" : "none" }}
                        >
                            <h5>{data.head}</h5>
                            <p>{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials