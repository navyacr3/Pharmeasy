import { Link } from "react-router-dom";
import d1array from "./d1array";


const Diagnostics1 = () => {
  return (
    <div className="diagnostic1a">
      <div className="diagnostic1b">
        {d1array.map((value) => (
          <Link className="Dlink ">
            <div className="diagnostic1c">
              <img src={value.img} alt="1" />
              <h1>{value.h1}</h1>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default Diagnostics1;
