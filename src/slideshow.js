import React from 'react';
import { Fade } from 'react-slideshow-image';
import sliderData1 from './slide1';
import 'react-slideshow-image/dist/styles.css'

// const slideImages = [
//   './images/slide1.jpg',
//   './images/slide1.jpg',
//   './images/slide1.jpg'
// ];

const Slideshow1 = () => {
    return (
      <div >
        <Fade>
        {sliderData1.map((value) => (
          <div className="slide" >
            <img src={value.img} alt="" />
          </div>
        ))}
            </Fade>
      </div>
    )
}

export default Slideshow1
