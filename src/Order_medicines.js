import React from "react";
import "./App.css";
import Footer from "./footer";
import Navbar1 from './navbar1'
import Ordermedicines1 from './Ordermedicines1'
import Ordermedicines2 from "./Ordermedicines2";
import Safety from "./safety";
import Slideshow1 from "./slideshow"
function Ordermedicines() {
  return (
     <div className="">
       <Navbar1 />
       <Slideshow1 />
       <Ordermedicines1 />
       <Safety />
       <Ordermedicines2 />
       <Footer />
     </div>
  );
}

export default  Ordermedicines;
