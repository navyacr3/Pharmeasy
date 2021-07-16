import img from "./images/safe.png";
import img1 from "./images/safe1.png";
import img2 from "./images/safe2.png";
import img3 from "./images/safe3.png";
import img4 from "./images/safe4.png";
import img5 from "./images/safe5.png";
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";



const Imgarray = [ {img:img},{img:img1},{img:img2},{img:img3},{img:img4},{img:img5}];

const Safety = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="safe11">
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={15}
        leftChevron={<button style={{color:'#10847e',background:'#F2F2F2',border: 'none',
        outline: 'none',width:'40px',height:'40px',position:'relative',bottom:'20px'}}>{<FaArrowLeft/>}</button>}
        rightChevron={<button style={{color:'#10847e',background:'#F2F2F2',border: 'none',
        outline: 'none',width:'40px',height:'40px',position:'relative',bottom:'20px'}} >{<FaArrowRight/>}</button>}
        // outsideChevron
        // chevronWidth={chevronWidth}
      >
   
      {Imgarray.map((value) => (
        <div className="simg" >
          <img src={value.img} alt="box1" className="safeimg" style={{width:'200px' , height:'110px' ,gap:'10px',flex:'2' }}  />
        </div>
      ))}
    
    </ItemsCarousel>
    </div>
    </div>
  );
};
export default Safety;

// style={{width:'270px' , height:'100px',display:'flex', justifyContent:'space-evenly'  }}