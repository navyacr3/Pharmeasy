
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import d2array from './d2array'




const Diagnostics3 = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
   
  return (
    <div className="safe11">
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        infiniteLoop={true}
        firstAndLastGutter={true}
         
        // activePosition={'center'}

        leftChevron={<button style={{color:'#10847e',background:'#D9D9D9',border: 'none',
        outline: 'none',width:'40px',height:'40px',position:'relative',bottom:'20px'}}>{<FaArrowLeft/>}</button>}
        rightChevron={<button style={{color:'#10847e',background:'#D9D9D9',border: 'none',
        outline: 'none',width:'40px',height:'40px',position:'relative',bottom:'20px'}} >{<FaArrowRight/>}</button>}
        outsideChevron={true}
        chevronWidth={chevronWidth}
        disableSwipe={true}
      >
   
      {d2array.map((value) => (
        <div className="simg" style={{width:'280px' , padding:'15px',height:'150px' ,gap:'10px',border:'1px #D9D9D9 solid',borderRadius:'6px'}} >
          <img src={value.img} alt="box1" className="safeimg"  style={{width:'180px' , height:'100px' }}/>
          <h4 style={{color:'#4f585e', fontFamily:'Open Sans,sans-serif' }}>{value.h1}</h4>
          <h6 style={{color:'#4f584e',fontFamily:'Open Sans,sans-serif' }}>{value.p}</h6>
        </div>
      ))}
    
    </ItemsCarousel>
    </div>
    </div>
  );
};
export default Diagnostics3;

// style={{width:'270px' , height:'100px',display:'flex', justifyContent:'space-evenly'  }}
 