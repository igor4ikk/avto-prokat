import React from "react";
import Mainpage from "./controller.view.js";

class Blockheader extends React.Component{
    render(){
        return(
            <Mainpage.Wrepper>
                 <Mainpage.Contentlf>
                     <Mainpage.Sitename></Mainpage.Sitename>
                     <Mainpage.Rent>rent a car</Mainpage.Rent>
                 </Mainpage.Contentlf>
                 <Mainpage.Contentrt>
                     <Mainpage.info>  
                        <Mainpage.ContInfo>Звяжіться з нами</Mainpage.ContInfo>
                        <Mainpage.Rent>цілодобово</Mainpage.Rent>
                    </Mainpage.info>
                    <Mainpage.leng>Select langes
                        <select>
                            <option>UKR</option>
                            <option>EN</option>
                            <option>FR</option>
                        </select>
                    </Mainpage.leng>
                 </Mainpage.Contentrt>
            </Mainpage.Wrepper>
        )
    };
}

export default Blockheader;