import React from "react";
import "./navi.css";




class Navipremium extends React.Component{

    render(){
        return(
            <div className ="wrepperCar">
                      <div className = "cheapCar">
                <h4 className ="nameCheap">Преміум</h4>
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
                        <a className = "imgLink" href = "#">Ford Mondeo</a>
                        <div className ="imgText">
                            <span>Бензин 2.3 </span>
                            <span>Механіка</span>
                            <img src = "https://ukr-prokat.com/wp-content/uploads/2017/11/24_Ford-Mondeo-246x140.jpg" />
                            <div className = "priceCar">109$ /добу</div>
                        </div>
                      
                      
                    </div>

                    <div className = "imgCarBox">
                        <a className = "imgLink" href = "#">Toyota Camry 2019</a>
                        <div className ="imgText">
                            <span>Бензин 2.0 </span>
                            <span>Механіка</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2017/11/Camry-2019-246x140.jpg" />
                        <div className = "priceCar">99$ /добу</div>
                    </div>


                    <div className = "imgCarBox">
                       <a className = "imgLink" href = "#">Audi A6 S-line</a>
                       <div className ="imgText">
                            <span>Бензин 1.8     </span>
                            <span>Механіка</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2018/08/audi-a6-2016ap-246x140.jpg" />
                        <div className = "priceCar">55$ /добу</div>
                    </div>

                </div>
            </div>    
        )
    };
}


export default Navipremium;