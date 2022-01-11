import React from "react";
import "./Login.css";
import "./Login.css";
function LoginView(props) {
  return (
    <div class="container-fluid">
      <div class="row">
        <div className="login">
          <div id="menu">
            <ul>
              <li>
                <a href="url">Home</a>
              </li>
              <li>
                <a href="url">Como funciona</a>
              </li>
              <li>
                <a href="url">Quem somos</a>
              </li>
              <li>
                <a href="url">Precisa de ajuda?</a>
              </li>
            </ul>
          </div>

          <div id="marca">
            <h1>GOAL</h1>
            <p>
              A plataforma de serviços financeiros de quem sonha e conquista.
            </p>
          </div>
          
          <div id="formulario">
          <div class="row">
          <div class="col-4">
            <form>
              <div class="row">
                <div className="col">
                  <label for="txtEmail" className="col-sm-2 col-form-label">
                    Usuário
                  </label>
                  <div className="col">
                    <input type="text" className="form-control" id="txtEmail" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div className="col">
                  <label for="txtSenha" className="col-sm-2 col-form-label">
                    Senha
                  </label>
                  <div className="col">
                    <input
                      type="password"
                      className="form-control"
                      id="txtSenha"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                     <p></p>
                    </div>
                  </div>
                  <button
                        class="btn  btn-primary input-block-level form-control"
                        type="submit">
                        Entrar
                      </button>
                </div>
              </div>
              <div class="row">
                <div className="col">
                <a className="btn btn-link"  href="/">Esqueci minha senha</a>
               </div>
               </div>
               <div class="row">
                <div className="col">
                <a className="btn btn-link" href="/">Criar conta</a>
                </div>
               </div> 
            </form>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default LoginView;
