import React from 'react'
import Header from './Header'
import ImageSlider from "./ImageSlider";
import './Home.css';
import AddHome from './AddHome';
import img from "../assets/slide_l.png"
export const Home = () => {
  const slides=[
    {url:'https://images.squarespace-cdn.com/content/v1/64767a4721e8dd0654ecee53/ea006ab3-caa3-4068-a8d1-65adb1c58cd4/22.12.03.209+DELLA+LAMB_Illuminate+the+City.jpg?format=2500w'},
    {url:'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/373FPIUI2MI6VAG72JFTLJLIVY.jpg'},
    {url:'https://assets.cntraveller.in/photos/6225a22e5934c6bf974e2a90/3:2/w_1920,h_1280,c_limit/Udaipur-saanchi-wedding%207.jpg'},
    // {url:'https://luxefete.com/wp-content/uploads/2022/08/Social-Celebrtions.jpg'},
    {url:'https://c1.wallpaperflare.com/preview/522/276/27/people-crowd-girls-dancing.jpg'},
    {url:'https://www.hyderabadevents.com/assets/uploads/3193422bf1cdc5750f73e3ec3d6ba074.jpg'},
    // {url:'https://media.tatler.com/photos/6141df898586e8b85b4e813f/16:9/w_1920,h_1080,c_limit/wedding-planner-shutterstock.jpg'}


  ];
  return (
     <div> 
       {/* <Header/> */}
       <div className='slide-img' >
          <ImageSlider slides={slides}/>
       </div>
       <AddHome/>
     </div> 
  )
}
export default Home
