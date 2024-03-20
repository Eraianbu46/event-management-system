import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import "./EventForm";
import EventForm from "./EventForm";
import { Route,Routes , useNavigate } from "react-router-dom";
const Card = (props) => {
  const navigate = useNavigate();

  const CardSubmit=()=>{
    navigate('/EventForm');
  };

  return (
    <div>
      <div className="cards">
        <div className="card">
          <img
            src={props.url}
            className="card-image-topn"
            width={313}
            height={243}
          />
          <div className="card-body">
            <h5 className="card-title">
              <strong>{props.info}</strong>
            </h5>
            {/* <p className="card-text"><em>Book your birthday event and make it more memorable one forever!</em></p> */}
            {/* <a href="#" className="btn btn-danger onClick={CardSubmit}">BOOK NOW</a> */}
            <button className="btn btn-danger book"  onClick={CardSubmit}>BooK Now</button>
            {/* onClick={CardSubmit} */}
           
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Card;
