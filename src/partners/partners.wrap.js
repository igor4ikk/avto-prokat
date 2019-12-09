import React from "react";
import Partners from "./partners.js";
import "./partners.css";

const img_2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBvk3TrBymJCISCxQFU6cAXnu9sPgfvpUxXcEMqMBrwui14pjng&s";
const img_3 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwa_LKOocyixoxay7Uze3trIYqCSDIvyj0a0rXkrxrlsL6BIBhw&s";
const img_4 = "https://verelq.am/uploads/news/80c64354b0621aa98388ebdd71fa02b2.jpg";
const img_5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKU-ypk-dA5H8AEC6YS-EehKVd8E8OJTxhfabHe28PeQehkF2dZA&s";


const listPerson = [{
  name: "WOG",
  img: img_2
},{
  name: "OKKO",
  img: img_3
},{
  name: "SOCAR",
  img: img_4
},{
  name: "Shell",
  img: img_5
}];


const storyPerson = listPerson.map((list) => {
  return(
    <Partners {...list} />
  )
})

const PartnersAll = (props)=>{
        return(
          <div>
            <h1 className = "partners">Наші партнери</h1>
              <div className = "part-wrap">
                
                {storyPerson}
              
              </div>
            </div>
        )
}


export default PartnersAll;
       