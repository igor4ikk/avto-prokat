import React from "react";
import "./navi.css";




class Navicomfort extends React.Component{

    render(){
        return(
            <div className ="wrepperCar">
                     <div className = "cheapCar">
                <h4 className ="nameCheap">Комфортні</h4>
                   <div className = "wrapperCar">
                        <div className = "wrapperName">
                           
                        </div>
                        <div className = "wrapperList">
                            <div className = "wrapp-list-all">
                                 <a href = "#" >Переглянути усі</a>
                            </div>    
                            <button className = "butNext">next</button>
                            <button className = "butNext">prev</button>
                            
                       </div>
                   </div> 
                  
                </div>
                <div className = "imgCar">
                    <div className = "imgCarBox">
                        <a className = "imgLink" href = "#">Toyota Corola 2019</a>
                        <div className ="imgText">
                            <span>Бензин 1.6 </span>
                            <span>Механіка</span>
                            <img src = "https://ukr-prokat.com/wp-content/uploads/2018/01/toyotacorolla2019-246x140.jpg" />
                            <div className = "priceCar">120$ /добу</div>
                        </div>  
                    </div>

                    <div className = "imgCarBox">
                        <a className = "imgLink" href = "#">Skoda Rapid</a>
                        <div className ="imgText">
                            <span>Бензин 2.0 </span>
                            <span>Механіка</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2019/04/rapid2-246x140.jpg" />
                        <div className = "priceCar">109$ /добу</div>
                    </div>


                    <div className = "imgCarBox">
                       <a className = "imgLink" href = "#">Renault Megan</a>
                       <div className ="imgText">
                            <span>Бензин 1.0 </span>
                            <span>Механіка</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2017/11/renomegan-246x140.jpg" />
                        <div className = "priceCar">59$ /добу</div>
                    </div>

                    <div className = "imgCarBox">
                         <a className = "imgLink" href = "#">Golf 7</a>
                         <div className ="imgText">
                            <span>Дизель 3.0 </span>
                            <span>Автомат</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2018/11/2018_vw_sportwagen-246x140.png" />
                        <div className = "priceCar">87$ /добу</div>
                    </div>
                </div>
            </div>    
        )
    };
}


export default Navicomfort;