import React from "react";
import "./info.css";

class Info extends React.Component{
    render(){
        return(
            <div className = "info">
                <div className = "container">
                    <div className = "cont-img">
                         <div className = "likeimg"> </div>
                         <h2 className = "liketext">В ціну включені всі податки</h2>
                    </div>
                    <div className = "cont-img">
                         <div className = "mapimg"></div>
                         <h2 className = "liketext">Подача по місту</h2>
                    </div>
                    <div className = "cont-img">
                         <div className = "insurens"></div>
                         <h2 className = "liketext">Страхування</h2>
                    </div>
                   <div className = "cont-img">
                         <div className = "infoimg"></div>
                         <h2 className = "liketext">Клієнтська підтримка 24/7</h2>
                   </div>
                  
                </div>
            </div>
        )
    };
}


export default Info