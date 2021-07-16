import React from 'react'
import "./App.css";
import Footer from "./footer";
import Navbar from "./navbar"
import Download from './download';
import Diagnostics1 from './diagnostic1'
import Diagnostics2 from './diagnostic2'
import Diagnostics3 from './diagnostic3'
import Member from "./membership";
import Pharmdesc from "./pharmdesc";
import Slideshow from "./diagnosticsw";
import Happyuser from "./happyuser"

function Diagnostics() {
    return (
        <div>
            <Navbar />
            <div className="diagnostic1">
            <Slideshow />
            <Diagnostics1 />
            <Member />
            <Happyuser />
            <Diagnostics3 />
            <Diagnostics2 />
            </div>
            <Pharmdesc />
            <Download />
            <Footer />
        </div>
    )
}

export default Diagnostics
