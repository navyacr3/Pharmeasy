import React from "react";
import "./App.css";
import Navbar from "./navbar";
// import Slideshow from "./diagnosticsw";
import Slideshow1 from "./slideshow";
import Order from "./order";
import Member from "./membership";
import Safety from "./safety";
import Categories from "./categories";
import One from "./one";
import Download from "./download";
import About from "./about";
import Footer from "./footer";


const Home = () => {
  return (
    <div className="">
      <Navbar />
      
      {/* <Slideshow1 /> */}
      <Slideshow1 />
      <div className="home1">
      <Order />
      <Member />
      <Safety />
      <Categories />
      <One />
      </div>
      <Download />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

