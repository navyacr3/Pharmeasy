import img1 from "./images/image.png";
import img2 from "./images/pharmplus.png";

const Member = () => {
  return (
    <div className="mem">
      <img src={img2} alt="" />
      <h3 style={{color:'white'}}>Save upto 10% extra & enjoy FREE delivery with PLUS membership</h3>
      <img src={img1} alt="" srcset="" id="im"/>
    </div>
  );
};

export default Member;
