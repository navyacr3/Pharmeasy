import React from 'react';
import { Fade } from 'react-slideshow-image';
import sliderData2 from './slide2';
import 'react-slideshow-image/dist/styles.css'


const Slideshow = () => {
    return (
      <div>
        <Fade >
          {sliderData2.map((value) => (
           <div className="slide1">
            {/* <div style={{backgroundImage: `url(value.img)`}}> */}
            <img src={value.img} alt="" />
              
            {/* </div> */}
          </div>
        ))}
          
        </Fade>
      </div>
    )
};

export default Slideshow;