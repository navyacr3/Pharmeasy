import img1 from './images/googleplay.png' 
import img2 from  './images/app.png'
// import { Link } from "react-router-dom";

const Download = () => {
    return (
        <div style={{position: 'relative' , textAlign: 'center' ,backgroundColor:'#f2f5f5',marginBottom:'0px'}} >
            <h2 style={{position: 'absolute' ,top:'180px',left:'20px', textAlign: 'center',margin:'30px',fontSize:'33px',color:'#4f585e'}}>Download the App for free</h2>
            <h1 style={{position:'absolute' , top:'45px',left:'20px',textAlign: 'center',margin:'30px',fontSize:'33px',color:'#4f585e'}}>Simplifying Healthcare, Impacting Lives</h1>
            <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&hl=en_IN&gl=US&utm_source=web&utm_medium=footer" className="Link" rel="noopener noreferrer" target='_blank' ><img src={img1} alt="google" srcset="" style={{position:'absolute' , top:'280px',width:'192px',height:'63px',left:'63px'}}/></a>
            {/* <img src={img2} alt="app" srcset="" style={{position:'absolute' , top:'280px',left:'290px',width:'192px',height:'63px'}}/> */}
            <a href="https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643" className="Link" rel="noopener noreferrer" target='_blank' ><img src={img2} alt="app" srcset="" style={{position:'absolute' , top:'280px',left:'290px',width:'192px',height:'63px'}}/></a>

            <div style={{display:"flex",justifyContent:'flex-end'}}>

            <img src="https://assets.pharmeasy.in/web-assets/dist/f67d7f64.jpg" alt="1" srcset="" target="_blank" style={{width:'580px',height:'390px'}} />
            </div>

        </div>
    )
} 

export default Download;