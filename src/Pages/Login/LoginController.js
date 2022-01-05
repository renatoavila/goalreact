import React from 'react';
import LoginView from './LoginView'
import LoginModel from './LoginModel'
class LoginController extends React.Component {
    constructor() {
        super();
        this.loginModel = new LoginModel();//inicializando 
        this.loginModel.getSomeInfo(); 
    }
    render() {
        return (
            <LoginView /> //Chamando o View
        )
    }
}
export default LoginController;