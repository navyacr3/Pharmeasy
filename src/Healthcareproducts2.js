import React from 'react'
import hparray from './hparray'
import { Link } from "react-router-dom";


const Healthcareproducts2 = () => {
    return (
        <div style={{margin:'0 200px'}} >
            <div className="healthprod" style={{ display:'flex',flexDirection:'row',flexWrap:'wrap',margin:'0px 100px 0px 100px'}}>
      {/* <div className="cat2" style={{ display:'flex',justifyContent:'space-evenly'}}> */}
   
        {hparray.map((value) => (
        
        <Link to='/' className="healthproda"><div className="himg" style={{ display:'flex',flexDirection:'row',cursor:'pointer',alignItems:'center',margin:'8px',width:'200px'}} >
         
          <img src={value.img} alt="box1" className="safeimg" style={{width:'50px' , height:'50px' ,margin:'2px'}}  />
         <h6 style={{ color:'#4f585e' ,fontSize:'12px',margin:'0px 20px 0px 20px'}}>{value.h1}</h6>
         <h6 style={{ fontSize:'10px', margin:'0px 5px 0px 5px',fontWeight:'normal',color:'#10847e'}}>{value.upto}</h6>
    
        </div></Link>
        
      ))}
     
      {/* </div> */}
    </div>
            
            

        </div>
    )
}

export default Healthcareproducts2
