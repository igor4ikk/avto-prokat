import React from "react";
// import Bootstrap from 'react-bootstrap';
import "./park.css";

class Parks  extends React.Component{
    render(){
        return(
           <div className ="contpark">
               <div className = "contname">
                   <h4 className = "conthead">Парк авто</h4>
                   <div className = "contfoto">
                        <div className = "wrepper-foto">
                             <div className = "fotoDnipro"></div>
                             <div className = "fotoname">Дніпро</div>
                        </div>
                        <div className = "wrepper-foto">
                            <div className = "fotoFrankivsk"></div>
                            <div className = "fotoname">Івано-Франківськ</div>
                        </div>
                        <div className = "wrepper-foto">
                            <div className = "fotoKyiv"></div>
                            <div className = "fotoname">Київ</div>
                        </div>
                        <div className = "wrepper-foto">
                            <div className = "fotoLviv"></div> 
                            <div className = "fotoname">Львів</div>
                        </div>
                        
                   </div>
                   
            
               </div>
               
           </div>
        )
    };

}

export default Parks;