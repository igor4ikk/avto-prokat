 import styled from "styled-components";
import { NONAME } from "dns";

//  const img = "https://ukr-prokat.com/wp-content/uploads/2019/01/prokatavto.jpg";
 const img2 = "https://ukr-prokat.com/wp-content/uploads/2019/01/rentalcar.jpg";


 export default{
     Wrapper:styled.div`
     background-color: #17273C;
     width: 100%;
     font-family: 'Lato Regular', sans-serif;
     `,
     nav:styled.div`
     font-size: 20px;   
     color: white;
     text-transform: uppercase;
     display: flex;
     justify-content: center;

     `,
     page:styled.div`
     margin: 25px;
     &:hover{
         color: #8AE234;
         cursor: pointer;
     }
     `,
     img:styled.div`
     width: 100%;
     height: 400px;
     background-image: url(${img2});
     
     `,
    order:styled.div`
    background-color: #F5C53E;
    width: 150px;
    border-radius: 10px;
    color: blue;
    margin-left: 110px;
    padding: 20px;
    text-align: center;
    font-size: 20px;
    &:hover{
        color: white;
        text-decoration: underline;
        cursor: pointer;
    }
    `,
    createRezerv:styled.form`
    display: none;
    background-color: white;
    height: 250px;
    width: 350px;
    `
 }
