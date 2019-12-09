import React from "react";
import "./navi.css";




class Navijeep extends React.Component{

    render(){
        return(
            <div className ="wrepperCar">
                     <div className = "cheapCar">
                <h4 className ="nameCheap">S class</h4>
                   <div className = "wrapperCar">
                        <div className = "wrapperName">
                           
                        </div>
                        <div className = "wrapperList"> 
                            <div className = "wrapp-list-all"> 
                                 <a href = "#"> Переглянути усі</a>
                            </div>    
                            <button className = "butNext">next</button>
                            <button className = "butNext">prev</button>
                            
                       </div>
                   </div> 
                  
                </div>
                <div className = "imgCar">
                    <div className = "imgCarBox">
                        <a className = "imgLink" href = "#">Nissan Qashqai</a>
                        <div className ="imgText">
                            <span>Бензин 2.3 </span>
                            <span>Механіка</span>
                            <img src = "https://ukr-prokat.com/wp-content/uploads/2017/11/qashkay-2-246x140.jpg" />
                            <div className = "priceCar">170$ /добу</div>
                        </div>
                      
                      
                    </div>

                    <div className = "imgCarBox">
                        <a className = "imgLink" href = "#">Nissan Juke</a>
                        <div className ="imgText">
                            <span>Бензин 2.0 </span>
                            <span>Механіка</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2019/02/juke-246x140.png" />
                        <div className = "priceCar">199$ /добу</div>
                    </div>


                    <div className = "imgCarBox">
                       <a className = "imgLink" href = "#">Suzuki Vitara</a>
                       <div className ="imgText">
                            <span>Бензин 1.8</span>
                            <span>Механіка</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2017/11/vitara2-246x140.jpg" />
                        <div className = "priceCar">140$ /добу</div>
                    </div>

                    <div className = "imgCarBox">
                       <a className = "imgLink" href = "#">Toyota Rav4 2019</a>
                       <div className ="imgText">
                            <span>Бензин 3.0 </span>
                            <span>Дизель</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2018/04/toyotarav4-246x140.jpg" />
                        <div className = "priceCar">145$ /добу</div>
                    </div>

                </div>
            </div>    
        )
    };
}


export default Navijeep;