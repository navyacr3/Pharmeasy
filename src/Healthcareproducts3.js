import React from 'react'
const array = [
    {
    img:"https://assets.pharmeasy.in/web-assets/dist/9ac2da37.svg?dim=0x72&dpr=1&q=100",
    text:"1 Lakh+ Products",
    para:"We maintain strict quality controls on all our partner retailers, so that you always get standard quality products."
    },
    {
        img:"https://assets.pharmeasy.in/web-assets/dist/2f258fe0.svg?dim=0x72&dpr=1&q=100",
        text:"Secure Payment",
        para:"100% secure and trusted payment protection"
    },
    {
        img:"https://assets.pharmeasy.in/web-assets/dist/256fe591.svg?dim=0x72&dpr=1&q=100",
        text:"Easy Return",
        para:"We have a new and dynamic return window policy for medicines and healthcare items. Refer FAQs section for more details."
    }

]
const Healthcareproducts3 = () => {
    return (
        <div>
            <div className="healthproduct1d">
             {array.map((value) => (
                 <div className="healthproduct1da">
       <>
          <img src={value.img} alt="1" srcset="" style={{width:'50px' , height:'50px' }}/>
          </>
          <>
          <h3>{value.text}</h3>
          </>
          <>
          <p style={{color:'#8897a2'}}>{value.para}</p>
          </>
          </div>
    
       
      ))}
        </div>
        </div>
    )
}

export default Healthcareproducts3
