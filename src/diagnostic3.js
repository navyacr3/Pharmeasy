
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";



const Imgarray = [ {img:"https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/55f90440a9873704a771d084cb65b909",
                    h1:'Affordable price',
                    p:'Get the best price for tests and packages by comparing across multiple labs.'
                    
},
                   {img:"https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/e916484d3a2336368ce2ecf1748437e2",
                    h1:'Conveinence',
                    p:'Get your samples collected at the comfort of your home.'
                },
                   {img:"https://cdn01.pharmeasy.in/dam/diagnostics/usp-images/64664cb0cfd63f81bc200f3e1e0c755f",
                    h1:'Accurate Reports',
                    p:'Get accurate and timely reports from our Certified Partner Laboratories.'
                },
];

const Diagnostics3 = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
   
  return (
    
    <div style={{ padding: `0 ${chevronWidth}px`, margin:'50px 0px 0px 0px'}}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={-100}
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
   
      {Imgarray.map((value) => (
        <div className="diagnostic3a" style={{width:'200px' , height:'400px' ,gap:'10px'}} >
          <img src={value.img} alt="box1" style={{width:'150px', height:'150px'}}  />
          <div className="diagnostic3b">
          <h1>{value.h1}</h1>
          <p>{value.p}</p>
          </div>
        </div>
      ))}
    
    </ItemsCarousel>
    </div>
   
  );
};
export default Diagnostics3;

// style={{width:'270px' , height:'100px',display:'flex', justifyContent:'space-evenly'  }}
 