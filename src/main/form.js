import React from "react";


class Form extends React.Component{
    render(){
        return(
            <form>
               <label> Your name:<input type = "text" value = "name" /></label>
               <label> Your email:<input type = "text" value = "email" /></label>
                <button>Send rezult</button>
            </form>
        )
    };
}

export default Form;