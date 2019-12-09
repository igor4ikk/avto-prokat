import React from "react";
import Cars from "./controller.view.js";




class Section extends React.Component{

render(){
    return(
        <Cars.Wrapper>
            <Cars.namemain>
                <Cars.namelist>Популярні авто </Cars.namelist>
                <Cars.listdiv>
                        {/* <div>dfve</div> */}
                </Cars.listdiv>
            </Cars.namemain>

            <Cars.carcheap>
                <Cars.maincheap>
                    <Cars.mainchl>Бюджетні</Cars.mainchl>
                    <Cars.mainchr>2</Cars.mainchr>
                </Cars.maincheap> 
            </Cars.carcheap>
            <Cars.listCars>
                    <Cars.typeCars>3</Cars.typeCars>
                    <Cars.carCitroen>2</Cars.carCitroen>
                    <Cars.carEle>car1</Cars.carEle>
                    
            </Cars.listCars>
           

        </Cars.Wrapper>
    )
};
}

export default Section;