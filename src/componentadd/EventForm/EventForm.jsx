import React, { useState } from "react";
import EventDataService from "../../Services/EventService";
import "./EventForm.css";

const EventForm = () => {
  const initialTutorialState = {
    id: null,
    name: "",
    email: "",
    location: "",
    number: null,
    event: "",
    budget: null,
    description: "",
    published: false,
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      name: tutorial.name,
      email: tutorial.email,
      location: tutorial.location,
      number: tutorial.number,
      event: tutorial.event,
      budget: tutorial.budget,
      description: tutorial.description,
    };

    EventDataService.create(data)
      .then((response) => {
        setTutorial({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          location: response.data.location,
          number: response.data.number,
          event: response.data.event,
          budget: response.data.budget,
          description: response.data.description,
          published: response.data.published,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4><br /><br />
        </div>
      ) : (
        <div className="form">
          
          <div className="form1">
          <form className="form1">
            <h1>
              <span className="Form-h" style={{ color: "red" }}>
                <em>Reservation</em>
              </span>
            </h1>
            <br></br>
            <br />
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={tutorial.name}
              onChange={handleInputChange}
              name="name"
            />
            <br></br>

            <label htmlFor="email">Email :</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={tutorial.email}
              onChange={handleInputChange}
              name="email"
            />

            <label htmlFor="location">Location :</label>
            <input
              type="location"
              className="form-control"
              id="description"
              required
              value={tutorial.location}
              onChange={handleInputChange}
              name="location"
            />

            {/* <label htmlFor="number">Contact Number :</label>
            <input
              type="number"
              className="form-control"
              id="number"
              required="true"
              value={tutorial.number}
              onChange={handleInputChange}
              name="number"
            /> */}

            <label htmlFor="event">Event :</label>
            <input
              type="text"
              className="form-control"
              id="event"
              required
              value={tutorial.event}
              onChange={handleInputChange}
              name="event"
            />

            <label htmlFor="budget">Budget: </label>
            <input
              type="text"
              className="form-control"
              id="budget"
              required
              value={tutorial.budget}
              onChange={handleInputChange}
              name="budget"
            />

            <label htmlFor="addons">AddOn:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="description"
            />

            <button type="submit" onClick={saveTutorial} className="form-btn">
              Submit
            </button>
            {/* <button type="submit" className="btn btn-danger">Submit</button> */}
          </form>
          </div>
          <div className="form2" >
            <img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1689141443~exp=1689142043~hmac=7b57b453fc6fd807fd3b00c293d82489cd1821ca26c4528393f7e39fb6daa7ef" alt="" />
          </div>
        </div>
        
      )}
    </div>
  );
};

export default EventForm;
