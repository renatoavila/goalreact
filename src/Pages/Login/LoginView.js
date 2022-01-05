import React from 'react';
import './Login.css';
function LoginView(props) {
    return (
        <div className='login'>

        <div id="menu">
            <ul>
            <li><a href="url">Home</a></li>
            <li><a href="url">Como funciona</a></li>
            <li><a href="url">Quem somos</a></li>
            <li><a href="url">Precisa de ajuda?</a></li>
            </ul>
    
        </div>
    
        <div id="marca">
        <h1>GOAL</h1>
        <p>A plataforma de serviços financeiros de quem sonha e conquista.</p>
        </div>
    
        <form> 
            <label>Usuário</label> 
            <input className=''></input>
                <label>Senha</label> 
            <input/> 
                <button>Entrar</button> 
        </form>
        <div class="suporte">
        <a href="url">Esqueci minha senha</a>
        <a href="url">Criar conta</a>
        </div>
    
    </div>
    );
}
export default LoginView;