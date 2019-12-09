import styled from "styled-components";
import img from "./logo.png";


export default{
    Wrepper:styled.div`
    background-color: #223348;
    display: flex; 
    height: 100px;
    font-family: 'Lato Regular', sans-serif;
    `,
    Contentlf:styled.div`
    display: block;
    width: 50%;
    text-align: center;
    margin: 20px;
    font-family: 'Lato Regular', sans-serif;
    `,
    Contentrt:styled.div`
    // background-color: yellow;
    display: flex;
    width: 50%;
    text-align: center;
    margin: 20px;
    font-family: 'Lato Regular', sans-serif;
    `,
    info:styled.div`
    // display: block;
    margin-left: 140px;
    width: 280px;
    `,
    leng:styled.div`
    margin-left: 140px;
    font-size: 30px;
    `,
    ContInfo:styled.span`
    font-size: 25px;
    color: white;
    `,
    Sitename: styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    height: 40px;
    margin-left: 350px;
    `,
    Rent:styled.div`
    font-size: 17px;
    color: white;
    `
}

