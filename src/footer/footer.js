import React from "react";
import "./footer.css";

class Footer extends React.Component{
    render(){
        return(
            <div className = "footer">
                <div className = "foot-box">
                    <div className = "footlogo">
                        <div>
                            <img src ="https://ukr-prokat.com/wp-content/themes/webera/images/logo.png" alt = "logo" />
                        </div>
                        <p className = "datacreate">
                        © 2013-2019 «Укр-Прокат»
                        оренда автомобілів в Україні
                        </p>
                        <div>adfgerge</div>
                    </div>
                    <div className = "footlogo footitem">
                        <ul className = "footitem">
                            <li>Парк авто</li>
                            <li>Ціни</li>
                            <li>Бронювання</li>
                            <li>Трансфери</li>
                            <li>Для юридичних осіб</li>
                        </ul>
                    </div>

                    <div className = "footlogo footitem">
                        <ul className = "footitem">
                            <li>Новини</li>
                            <li>Блог</li>
                            <li>Faq</li>
                            <li>Відгуки</li>
                            <li>Контакти</li>
                        </ul>
                    </div>
                  

                    <div className = "footlogo">
                        <div className = "but-reserv">
                            <a href ="#">Замовити</a>
                        </div>
                            <img src = "https://ukr-prokat.com/wp-content/themes/webera/images/visa-mastercard.png" alt = "logobank" />
                        <div>
                            <p>fogkearge</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Footer; 