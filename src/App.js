import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import EventForm from "./componentadd/EventForm/EventForm";
import Footer from "./componentadd/Footer";
import Testimonials from "./componentadd/EventForm/Testimonials";
import Header from "./component/Header";
import Card from "./componentadd/EventForm/Card";
import Feastured from "./componentadd/Feastured";
function App() {
  return (
    
    <div className="app-header">
       <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Event" element={
          <>
            <h className="Event-h">Events</h>
            <p className="Event-p">Event Planner is a full service event management firm based in Calgary,<br /> Alberta that was created by pairing together our passion for business and events. We bring a fresh, unique approach to the event management industry.
<br />Our team understands that a properly executed  event can be leveraged to support an organization’s strategic vision, <br /> incorporated into a company’s marketing plan,
or used to build networks and client loyalty.</p>
            <div className="cards">
            <Card
              url="https://media.istockphoto.com/id/1058378986/photo/birthday-boy.jpg?s=612x612&w=0&k=20&c=tpXbDZRK2eT_vG8Tt0KdAOomtMU3dT3BTajj4TJr92w="
              info="BirthDay"
            />
            <Card
              url="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
              info="Concert"
            />
            <Card
              url="https://media.istockphoto.com/id/171592241/photo/full-of-audience.jpg?s=612x612&w=0&k=20&c=Ood48AXdbV8OluDbWK2YF9hqkCY651HB5aav8ecRYj4="
              info="Political"
            />
            <Card
              url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHXb60kLqIEbidYnyCIGY-SGuZrQbNW-hq-3UCvqGiNnXMQIgWkAiQtshKIVChJUO9-M&usqp=CAU"
              info="Culturals"
            />
          </div>
          </>
           } />

          <Route path="/Feastured" element={<Feastured/>} />
          <Route path="/EventForm" element={<EventForm/>} />
          <Route path="/Testimonials" element={<Testimonials/>} />


        </Routes>

       <Footer></Footer>



      {/* <Home></Home> */}
      {/* <Feastured></Feastured> */}
      {/* <EventForm></EventForm> */}
      {/* <Card></Card> */}
      {/* <div className="Card-h">
        <h1>Events</h1>
      </div>
      <div className="cards">
        <Card
          url="https://media.istockphoto.com/id/1058378986/photo/birthday-boy.jpg?s=612x612&w=0&k=20&c=tpXbDZRK2eT_vG8Tt0KdAOomtMU3dT3BTajj4TJr92w="
          info="BirthDay"
        />
        <Card
          url="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600"
          info="Concert"
        />
        <Card
          url="https://media.istockphoto.com/id/171592241/photo/full-of-audience.jpg?s=612x612&w=0&k=20&c=Ood48AXdbV8OluDbWK2YF9hqkCY651HB5aav8ecRYj4="
          info="Political"
        />
        <Card
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHXb60kLqIEbidYnyCIGY-SGuZrQbNW-hq-3UCvqGiNnXMQIgWkAiQtshKIVChJUO9-M&usqp=CAU"
          info="Culturals"
        />
      </div>
      <Routes>
        <Route path="/EventForm" element={<EventForm />} />
      </Routes>
      <Testimonials></Testimonials>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
