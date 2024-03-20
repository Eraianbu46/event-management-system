import React,{useRef,useEffect, useState} from 'react'
import slidel from '../assets/slide_l.png';
import slider from '../assets/slide_r.png';
const ImageSlider = ({slides}) => {
    const timerRef=useRef(null);
    const [currInd,setCureInd]=useState(0);
    const sliderStyle={
       height:"100%",
       position:"relative",
    }
    const SlideStyles={
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        backgroundposition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${slides[currInd].url})`,
    };
    const goToPre=()=>{
        const newInd=(currInd===0)?slides.length-1:currInd-1;
        setCureInd(newInd);
    }
    const goToNxt=()=>{
        const newInd=(currInd===slides.length-1)?0:currInd+1;
        setCureInd(newInd);
    }
    const goTOSlide=(indx)=>{
        setCureInd(indx);
    }
    useEffect(()=>{
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        console.log("UseEffect");
        timerRef.current=setTimeout(()=>{
            goToNxt();
        },3000)

        return ()=>clearTimeout(timerRef.current);
    },[goToNxt]);

    const buttonStyle={
        width:'0.1rem',
    }
  return (
    <div style={sliderStyle} >
        <div className='slide-l' onClick={goToPre}>
            <img src={slidel} alt="" />
        </div>
        {/* <div className='indicat'>
        <span className='indc'>
            {slides.map((_,idx)=>{
                return (
                <button key={idx} className='btn-indicatort' style={buttonStyle} onClick={()=>goTOSlide(idx)}>
                </button>);
            })}
        </span>
        </div> */}
        <div className='slide-r'  onClick={goToNxt}>
        <img src={slider} alt="" />
        </div>
        
        <div style={SlideStyles}></div>
    </div>
  )
}

export default ImageSlider