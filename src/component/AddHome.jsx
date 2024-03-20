import React from "react";
import "./AddHome.css";
const AddHome = () => {
  return (
    <div className="addhome">
      <div className="home-l">
        <h1>Creating Experiences</h1>
        <div>
          <p>
          CREATING MEMORABLE EVENTS TAILORED TO THE CLIENT
Based in Los Angeles, elleaevents designs and executes special occasions shaped to meet the client's style and personality. From large, branded corporate events to intimate weddings and everything in between, Elle Anderson and her team provide unique insights that will make your big day unforgettable.
          </p>
        </div>
        <div>
          <br />
          <button className="btn addhome-btn">Lets Start</button>
        </div>
      </div>
      <dic className="home-r">
        <div>
          <img src="https://images.squarespace-cdn.com/content/v1/5a85064ce9bfdf18acd2f3e5/e8c45106-4c59-4b89-a51d-171b716060de/29+Destination+California+Luxury+Wedding+Planner+-+Hanging+Chandelier+Dinner+copy.jpg?format=2500w" alt="" />
          
          {/* <video id="home-main-video" class="image-wrap slick-slide" poster="<?php echo $image[0]; ?>" loop="" autoplay="" playsinline="" muted="" _idm_id_="16385" aria-hidden="true" style="width: 100%; display: inline-block;">
                                <source src="https://luxefete.com/wp-content/uploads/2022/07/Creating-Experiences3.mp4" type="video/mp4">
                              </video> */}
          {/* <video src="https://luxefete.com/wp-content/uploads/2022/07/Creating-Experiences3.mp4" type="video/mp4" autoPlay muted></video> */}
          {/* <video src="https://i.ytimg.com/vi/Lkm-qtRiFyc/maxresdefault.jpg  " type="video/mp4" autoPlay muted></video> */}


        </div>
      </dic>
    </div>
  );
};

export default AddHome;
