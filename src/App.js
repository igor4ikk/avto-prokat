import React from 'react';
import Blockheader from "./header/header.js";
import Mainpage from "./main/main.js";
import Navicar from "./navi/navigation.js";
import Navicomfort from "./navi/navicomfort.js";
import Navipremium from "./navi/navipremium.js";
import Navijeep from "./navi/navijeep.js";
import Info from "./information/information.js";
import Parks from "./park/park.js";
import Textstory from "./textstory/text.js";
import Footer from "./footer/footer.js";
import PartnersAll from "./partners/partners.wrap.js";

// import Section from "./section/section";



const App = (props) => {
  return(
      <div>
        <Blockheader />
        <Mainpage />
        <Navicar />
        <Navicomfort />
        <Navipremium />
        <Navijeep />
        <Info />
        <Parks />
        <PartnersAll />
        <Textstory />
        <Footer />
        
        {/* <Section /> */}
      </div>
    )
  };



export default App;



 
