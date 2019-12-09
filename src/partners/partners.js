import React from "react";
import "./partners.css";

const IMG_DEFAULT = "https://pbs.twimg.com/profile_images/438028087838531584/tqqdPo2q_400x400.png";


// деструктиризація замість props
const Partners = ({img = IMG_DEFAULT, name = "ivan"}) =>{
    return(
        // <div className = "wrapper">
         
             <div className = "wrapperLogo">
             
                <img className = "wrapperImg" src = {img} alt = {name} />
                <div className = "wrapperText">
                    <a className = "wrapperLink" href = "#" >{name} </a>
                </div>
            </div>
        //   </div>  
    )
}



export default Partners;