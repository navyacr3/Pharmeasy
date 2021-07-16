import React from 'react'
import "./App.css";
import Footer from "./footer";
import Navbar from "./navbar"
import Download from './download';


function Cart() {
    return (
        <div>
            <Navbar />
            
            <Download />
            <Footer />
        </div>
    )
}

export default Cart
