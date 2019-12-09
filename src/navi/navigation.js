import React from "react";
import "./navi.css";




class Navicar extends React.Component{
    constructor(){
        super();
            this.state = {
                liked: false
            };
            this.updateMessage = this.updateMessage.bind(this)
    }

 updateMessage() {
     console.log('true')
     this.setState({
         liked: true
     });
 }

    render(){
        return(
            <div className ="wrepperCar">
                <div className = "popAuto">
                    <p className = "wrepperName">Популярні авто</p>
                    <div className = "wrepperElem">    
                        <div className = "wrepperBox"></div>
                    </div>
                </div>
                <div className = "cheapCar">
                <h4 className ="nameCheap">Популярі авто</h4>
                {/* <button onClick = {this.updateMessage}>click me</button> */}
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
                        <a className = "imgLink" href = "#">Smart Cablio</a>
                        <div className ="imgText">
                            <span>Бензин 0.9 </span>
                            <span>Механіка</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2017/11/2_Smart-Cabrio-246x140.jpg" />
                        <div className = "priceCar">109$ /добу</div>
                    </div>

                    <div className = "imgCarBox">
                        <a className = "imgLink" href = "#">Citroen C4</a>
                        <div className ="imgText">
                            <span>Бензин 1.9 </span>
                            <span>Механіка</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2017/11/3_Citroen-C1-246x140.jpg" />
                        <div className = "priceCar">99$ /добу</div>
                    </div>


                    <div className = "imgCarBox">
                       <a className = "imgLink" href = "#">Smart C-X</a>
                       <div className ="imgText">
                            <span>Бензин 2.0 </span>
                            <span>Механіка</span>
                        </div>
                        <img src = "https://ukr-prokat.com/wp-content/uploads/2017/11/9_Citroen-C-Elysee-246x140.jpg" />
                        <div className = "priceCar">55$ /добу</div>
                    </div>

                    <div className = "imgCarBox">
                         <a className = "imgLink" href = "#">Skoda fabia</a>
                         <div className ="imgText">
                            <span>Бензин 1.3 </span>
                            <span>Механіка</span>
                        </div>
                        <div>
                            <img src = "https://ukr-prokat.com/wp-content/uploads/2017/11/6_Skoda-Fabia-Combi-246x140.jpg" />
                            <div className = "priceCar">89$ /добу</div>
                        </div>
                        
                    </div>
                </div>
            </div>    
        )
    };
}


export default Navicar;