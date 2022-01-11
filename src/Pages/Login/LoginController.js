import React from 'react';
import Api from "../../Services/Api";
import LoginView from './LoginView'
import LoginModel from './LoginModel'
class LoginController extends React.Component {
    
    constructor() {
        super();
        this.setState({ "": "" });
       
        this.loginModel = new LoginModel();//inicializando 
         
            Api
              .post("login/",{
                email: "renato@teste.com",
                senha: "12345678" 
            })
              .then((response) => console.log(response.data))
              .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
              });
    }
    render() {
        return (
            <LoginView Model={this.loginModel} /> //Chamando o View
        )
    }
}
export default LoginController;