// import img1 from "https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg";
// import img2 from "https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg";
// import img3 from "./images/cat3.jpg";
// import img4 from "./images/cat4.jpg";


const Imgarray = [
  {img:'https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg',text1:'50 LAKH+' , text2:'Families served'},
{img:'https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg',text1:'1.5 Crore+' , text2:'Orders Delivered'},
{img:'https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg',text1:'22000+' , text2:'Pincodes served'},
{img:'https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg',text1:'1 LAKH+' , text2:'Medicines Available'},

];

const One = () => {
  return (
  <div>
    <div className="safe" style={{ display:'flex',flexDirection:'row'}}>
      {/* <div className="cat2" style={{ display:'flex',justifyContent:'space-evenly'}}> */}
        {Imgarray.map((value) => (
        <div className="cimg" style={{ display:'flex',flexDirection:'column',alignItems:'center'}} >
          <img src={value.img} alt="box1" className="safeimg" style={{width:'100px' , height:'150px' }}  />
         <h1 style={{ color:'#4f585e' ,fontSize:'40px'}}>{value.text1}</h1>
         <h2 style={{ color:'#4f585e' ,fontSize:'20px', fontWeight:'normal'}}>{value.text2}</h2>
    
        </div>
      ))}
      {/* </div> */}
    </div>
    </div>
  );
};

export default One;

// style={{width:'270px' , height:'100px',display:'flex', justifyContent:'space-evenly'  }}