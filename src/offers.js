import React from "react";
import "./App.css";
import Navbar from "./navbar";
// import Slideshow from "./diagnosticsw";
import Slideshow1 from "./slideshow";
import Download from "./download";
import About from "./about";
import Footer from "./footer";


const Offers = () => {
  return (
    <div className="">
      <Navbar />
      
      {/* <Slideshow1 /> */}
      <Slideshow1 />
      <Download />
      <About />
      <Footer />
    </div>
  );
};

export default Offers;

