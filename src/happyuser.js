
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import d3array from './d3array'

const Happyuser = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
   
  return (
    <div  className="happy">
    <div className="happya" style={{ padding: `0 ${4*chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={0}
        infiniteLoop={true}
        showSlither={true}
        firstAndLastGutter={true}
        // activePosition={center}
        // centerMode={true}

        leftChevron={<button style={{color:'#10847e',background:'#D9D9D9',border: 'none',
        outline: 'none',width:'40px',height:'40px',position:'relative',bottom:'20px'}}>{<FaArrowLeft/>}</button>}
        rightChevron={<button style={{color:'#10847e',background:'#D9D9D9',border: 'none',
        outline: 'none',width:'40px',height:'40px',position:'relative',bottom:'20px'}} >{<FaArrowRight/>}</button>}
        outsideChevron={true}
        chevronWidth={chevronWidth}
        disableSwipe={true}
      >
   
      {d3array.map((value) => (
        <div   className="happyb"  >
            
          <img style={{width:'100px',height:'100px',borderRadius:'50px'}} src={value.img} alt="box1"   />
          
          <div className="happyc">
          <h2 style={{color:'#4f585e'}}>{value.h1}</h2>
          <p>{value.p}</p>
          </div>
        </div>
      ))}
    
    </ItemsCarousel>
    </div>
    </div>
  );
};
export default Happyuser;

// style={{width:'270px' , height:'100px',display:'flex', justifyContent:'space-evenly'  }}
 