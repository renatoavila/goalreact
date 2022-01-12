import React from 'react'

import axios from 'axios'
import {  Formik, Form, Field } from 'formik'


import { history } from '../../history'
import './Login.css'

const Login = () => {
    const handleSubmit = values => {
        axios.post('https://goalapifiap.herokuapp.com/api/login/', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.push('/')
                }
            })
    }

    return (

        <div className="container-fluid">
        <div className="row">
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
            <div className="row">
            <div className="col-4">
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
            >
                <Form>
                <div className="row">
                  <div className="col">
                    <label  className="col-sm-2 col-form-label">
                      Usuário
                    </label>
                    <div className="col">
                      <Field type="text" className="form-control" name="email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label  className="col-sm-2 col-form-label">
                      Senha
                    </label>
                    <div className="col">
                      <Field
                        type="password"
                        className="form-control"
                        name="senha"
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
                          className="btn  btn-primary input-block-level form-control"
                          type="submit">
                          Entrar
                        </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                  <a className="btn btn-link"  href="/">Esqueci minha senha</a>
                 </div>
                 </div>
                 <div className="row">
                  <div className="col">
                  <a className="btn btn-link" href="/">Criar conta</a>
                  </div>
                 </div> 
                 </Form>
            </Formik>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
       
        
    )
}

export default Login
