import styled from "styled-components";

const carSmart = "https://ukr-prokat.com/wp-content/uploads/2017/11/2_Smart-Cabrio-246x140.jpg";
const carCitroen = "https://ukr-prokat.com/wp-content/uploads/2017/11/3_Citroen-C1-246x140.jpg";
const carEle = "https://ukr-prokat.com/wp-content/uploads/2017/11/9_Citroen-C-Elysee-246x140.jpg";

export default{
    Wrapper:styled.div`
    display: block;
    `,
    namelist:styled.div`
    text-align: center;
    font-family: 'Lato Bold', sans-serif;
    font-size: 30px;
    // background-color: orange;
    padding: 15px;
    text-transform: uppercase;
    font-weight: bold;
    `,
    listdiv:styled.div`
     width: 80px;
    height: 10px;
    background-color: orange;
    // justify-content: center;
    text-align: center;
    border-radius: 5px;
    `,
    namemain:styled.div`
    text-align: center; 
    `,
    carcheap:styled.div`
    height: 55px;
   
    `,
    maincheap:styled.div`
    // background-color: red;
    height: 50px;
    display: flex;
    `,
    mainchl:styled.div`
    background-color: blue;
    width: 50%;
    `,
    mainchr:styled.div`
    background-color: yellow;
    width: 50%;
    `,
    listCars:styled.div`
    display: flex;
  
    `,
    typeCars:styled.div`
    height: 130px;
    background-image: url(${carSmart});
    background-repeat: no-repeat;
    height: 130px;
    width: 140px;
    `,
    carCitroen:styled.div`
    background-image: url(${carCitroen});
    height: 130px;
    width: 140px;
    `,
    carEle:styled.div`
    background-image: url(${carEle});
    height: 130px;
    width: 140px;
    `
}