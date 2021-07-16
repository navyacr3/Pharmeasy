import { Link } from "react-router-dom";
import {FaFacebook,FaInstagramSquare,FaYoutube,FaTwitterSquare} from "react-icons/fa"
const Footer = () => {
    return (
        <div className="footer">

            <ul>
            <h4>Company</h4>
                <li>Careers</li>
                <li>Blog</li>
                <li>Partner with Pharmeasy</li>
            </ul>
            <ul>
                <h4>Our services</h4>
               <Link to="/Order_medicines" className="Link1"> <li>Order Medicine</li></Link>
               <Link to="/Healthcare_products" className="Link1"> <li>Healthcare Products</li></Link>
                <li>Diagnostic Tests</li>
            </ul>
        
            <ul>
                <h4>Features</h4>
                <li>Covid Essentials</li>
                <li>Devices</li>
                <li>Nutrition & Fitness Supplements</li>
                <li>Personal Care</li>
                <li>Ayurvedic Care</li>
                <li>Baby and Mom Care</li>
                <li>Skin Care</li>
                <li>Diabetic Care</li>
                <li>Sexual Wellness</li>
                <li>Short Term Allments</li>
                <li>Lifestyle allments</li>
                <li>Home Care</li>
                <li>Women Care</li>
                <li>Health Food and Drinks</li>
                <li>Ortho Care</li>
            </ul>
            <ul>
                <h4>Need Help</h4>
                <li>Browse All Medicines</li>
                <li>Browse All Molecules</li>
                <li>FAQs</li>
            </ul>
            <ul>
                <h4>Policy Info</h4>
                <li>Editorial Policy</li>
                <li>Privacy Policy</li>
                <li>Vulnerability Disclosure Policy</li>
                <li>Terms and condition</li>
                <li>Customer Support Policy</li>
                <li>Return Policy</li>
            </ul>
            <div className="footera">
                <h4>Follow Us</h4>
                <li><FaFacebook/></li>
                <li><FaInstagramSquare/></li>
                <li><FaYoutube /></li>
                <li><FaTwitterSquare/></li>
            </div>
            <div className="footerb">
                        <h5>Our Payment Partners</h5>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/0aca2077.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg" alt="1"></img>
                     <img src="https://assets.pharmeasy.in/web-assets/dist/6e09c713.svg" alt="1"></img>
              
            </div>
            <h5 style={{position:'relative',top:'30px'}}>© 2021 PharmEasy. All Rights Reserved</h5>
        </div>
    )
}

export default Footer;