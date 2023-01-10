import AliceCarousel from "react-alice-carousel"

import { ArrowLeft } from 'react-bootstrap-icons'
import { ArrowRight } from 'react-bootstrap-icons'
import sliderData from "../data/sliderData";



// const items = miniCarData.map(data => {
//   console.log(data)
//   const children = data.children.map(c => {
//     return (
//       <div className="miniCarousel">
//         <img src={c.image} role="presentation" className="miniImage" />
//         <div className="miniTitle">
//           <h4>{c.title}</h4>
//           <h6>{c.items}</h6>
//         </div>
//       </div>
//     )
//   })
//   return (
//     <div className="d-flex">
//       {children}
//     </div>
//   )
// })

const items = sliderData.map(data => {
  return (
    <div className="miniCarousel">
         <img src={data.image} role="presentation" className="miniImage" />
         <div className="miniTitle">
           <h4>{data.title}</h4>
           <h6>{data.items}</h6>
         </div>
       </div>
  )
})

export default function MiniCarousel() {
  return (
    <div>
      <ArrowLeft />
      <AliceCarousel  items={items} disableButtonsControls={true} responsive={{
        0: {
            items: 3,
        },
        
      }} />

     
      
    
      <ArrowRight />
    </div>
  )
}
