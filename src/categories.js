import img1 from "./images/cat1.jpg";
import img2 from "./images/cat2.jpg";
import img3 from "./images/cat3.jpg";
import img4 from "./images/cat4.jpg";



const Imgarray = [{img:img1},{img:img2},{img:img3},{img:img4}];

const Categories = () => {
  return (
  <div>
    <div className="cat1" style={{ display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
            <h1>Top Categories</h1>
            <button style={{ outline:'none',color:'#10847e',background:'none',fontWeight:'bold',border:'none',fontSize:'20px'}}>VIEW All</button>
        </div>
    <div className="safe" style={{ display:'flex',flexDirection:'row'}}>
      {/* <div className="cat2" style={{ display:'flex',justifyContent:'space-evenly'}}> */}
        {Imgarray.map((value) => (
        <div className="cimg" style={{ display:'flex',flexDirection:'row'}} >
          <img src={value.img} alt="box1" className="safeimg" style={{width:'300px' , height:'350px' ,backgroundBlendmode:'color' }}  />
        </div>
      ))}
      {/* </div> */}
    </div>
    </div>
  );
};

export default Categories;

// style={{width:'270px' , height:'100px',display:'flex', justifyContent:'space-evenly'  }}