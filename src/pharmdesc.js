import { Link } from "react-router-dom";
import parray from "./parray";


const Pharmdesc = () => {
  return ( 
      
        <div className="pharmdesca">
        {parray.map((value) => (
          <Link className="Dlink ">
            <div className="pharmdescb">
              <img src={value.img} alt="1" />
              <h3>{value.h1}</h3>
              <p>{value.p}</p>
            </div>
          </Link>
        ))}
      </div>
      
  );
};
export default Pharmdesc