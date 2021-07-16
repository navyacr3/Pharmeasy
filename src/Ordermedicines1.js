import React from "react";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { FaPercentage } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
 

const array = [
  {
    text: "Flat 15% Off",
    logo:<FaPercentage/>
  },

  {
    text: "1 Lakh+ Product",
  },
  {
    text: "Easy Returns",
    logo:<AiOutlineRetweet/>
  },
];
function Ordermedicines1() {
  return (
    <div className="ordermed">
      <div className="ordermed1">
        <Link to="/" className="Link" style={{ color: "black" }}>
          <h5>Home</h5>
        </Link>
        <h5>&gt; Order Medicines</h5>
      </div>
      <div className="om1">
        <div className="ordermed2">
        <h2 style={{ color: "#4f585e", margin: "10px" }}>
          Order Medicines Online
        </h2>
          <div className="ordermed2a">
            <div className="ordermed2a1">
              
              {array.map((value) => (
                <h6>{value.logo} {value.text}</h6>
              ))}
            </div>
            <h4>Search for Medicines / Healthcare Products</h4>
            <input
              type="text"
              name="search"
              className="search1"
              placeholder="Search for medicines/Health products"
              id=""
            />
          </div>
        </div>
        <div className="ordermed3">
          <div className="ordermed3a">
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/ef63c33a.svg"
              alt=""
              srcset=""
            />
            {/* <h6>Order via prescription</h6> */}
            <b
              style={{
                position: "relative",
                bottom: "2px",
                fontSize: "11px",
                justifyContent: "space-between",
                marginLeft: "3px",
                cursor: "pointer",
              }}
            >
              Order via prescription
            </b>

            <h6>&gt;</h6>
          </div>
          <div className="ordermed3b">
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/8dfc9006.svg"
              alt=""
              srcset=""
            />
            <b
              style={{
                position: "relative",
                bottom: "14px",
                fontSize: "11px",
                justifyContent: "space-between",
                marginLeft: "3px",
                cursor: "pointer",
                marginBottom: "50px",
              }}
            >
              {" "}
              Don't have prescription{" "}
            </b>

            <ul style={{ margintop: "50px" }}>
              <li>Add medicines to your cart.</li>
              <li>Select Free Doctor Consultation at checkout.</li>
            </ul>

            <h1 className="ordermed3ba">
              or call to Order <BiPhone />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ordermedicines1;
