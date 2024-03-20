import React from 'react'
import './Header.css'
const Header = () => {
  return (
     <div className='header'>
        <ul className='header-l'>
         <li><a href="/Home">Home</a></li>
         <li><a href="/Event">Event</a></li>
         <li><a href="/Feastured">FeasturedEvent</a></li>
        </ul>
        <h2>Event Planner</h2>
        <ul className='header-r'>
            <li><a href="/Testimonials">Testimonials</a></li>
            <li><a href="/EventForm">Book Now</a></li>
            <li>Contact Us</li>
        </ul>
  </div>
  )
}

export default Header