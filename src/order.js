import Orderarray from "./array";
import {Link} from "react-router-dom"
const Order = () => {
  return (
    <div className="box">
      {Orderarray.map((value) => (
        <div className="sbox">
         
          <img src={value.img} alt="box1" className="imgs" />
          <h6 className="text1" style={{position:'relative',top:'-200px' ,left:'0px'}}>{value.flat}</h6>
          <Link to={value.link}><input type="submit" value={value.now} className="btn" style={{position:'relative',bottom:'-6px' ,left:'-24px'}} /></Link>
        </div>
      ))}
    </div>
  );
};

export default Order;
