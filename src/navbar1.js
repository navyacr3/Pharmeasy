import img1 from './images/logo.png'
import {Link} from "react-router-dom"
import { FaCartPlus ,FaUserAlt } from "react-icons/fa";
import { AiFillTags } from "react-icons/ai";

// import {Link,Router,Switch} from "react-router-dom"
// import  Ordermedicines from './Order_medicines'
// const Navarray1 = ["Order Medicines","Healthcare Products","Diagnostic Test"];
// const Navarray2 = ["Offers", "login/signup","Cart"];

const Navarray1 = [
    {
        text: "Order Medicines",
        link: "/Order_medicines"
    },

    {
        text:"Healthcare Products",
        link: "./Healthcare_products"
    },
    {
        text:"Diagnostic Test",
        link:"./Diagnostic_test"
    },
    
]
const Navarray2 = [
    {
        text: "Offers",
        link:"/Offers",
        logo:<AiFillTags />
        
    },

    {
        text:"login/signup",
        link:"/login",
        logo:<FaUserAlt/>
    },
    {
        text:"Cart",
        link:"/Cart",
        logo:<FaCartPlus />
    },
    
]


const Navbar1 = () => {
    return (
        <div>
            <nav className="navb">
                <div className="navb1">
                     <a href='/'><img className='logo' src={img1} alt="logo" srcset="" /></a>
                  
                    <Link to='/prescreption' className="Link"><ul className="prescreption">
                        <li>Don't have prescreption?</li>
                        <li>Get Started ⮟</li>
                    </ul></Link>
                </div>
                <div className="navb2">
                    <div className="first">
                    {Navarray1.map((value) =>
                    <Link to={value.link} className="Link"><h4 className="first1">{value.logo} {value.text}</h4></Link>
                    )}
                    </div>
                    <div className="second">
                    {Navarray2.map((value) =>
                   <Link to={value.link} className="Link"><h4 className="first1">{value.logo} {value.text}</h4></Link>
                    )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar1;
