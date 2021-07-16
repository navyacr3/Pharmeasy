import React from 'react'
import "./App.css";
import Footer from "./footer";
import Navbar from "./navbar"
import Download from './download';
import Healthcareproducts1 from './Healthcareproducts1';
import Healthcareproducts2 from './Healthcareproducts2';
import Healthcareproducts3 from './Healthcareproducts3';
function Healthcareproducts() {
    return (
        <div>
            <Navbar />
            <Healthcareproducts1 />
            <Healthcareproducts2 />
            <Healthcareproducts3 />
            <Download />
            <Footer />
        </div>
    )
}

export default Healthcareproducts
