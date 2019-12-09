import React from "react";
import Menu from "./controller.view.js";
import Form from "./form";
import $ from "jquery";

class Mainpage extends React.Component{
    constructor(){
        super();
        this.getForm = this.getForm.bind(this);
    }

    componentDidMount(){
        this.getForm();
    }


    getForm = () =>{
        // console.log("hellow")
        return(
            $("order").on('click', function(){
                console.log('hellow igor')
            })
        );
           
    }
  

    render(){
        return(
           
            <Menu.Wrapper>
            
                <Menu.nav>
                    <Menu.page>
                        Парк авто
                    </Menu.page>
                    <Menu.page>
                        Ціни
                    </Menu.page>
                    <Menu.page>
                        Бронювання
                    </Menu.page>
                    <Menu.page>
                        Умови прокату
                    </Menu.page>
                    <Menu.page>
                        Трансвери
                    </Menu.page>
                    <Menu.page>
                        Новини
                    </Menu.page>
                    <Menu.page>
                            faq
                    </Menu.page>
                    <Menu.page>
                            Контакти
                    </Menu.page>
                </Menu.nav>
                <Menu.img>
                    <Menu.order onClick = {this.getForm}>

                        Створити замовлення

                    </Menu.order>

                    <Menu.createRezerv>

                         <Form />
                    
                     </Menu.createRezerv>
                </Menu.img>
            </Menu.Wrapper>
           
        )
    };
}

export default Mainpage;