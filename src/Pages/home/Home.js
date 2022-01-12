import React from 'react'

import axios from 'axios'
import { Formik, Form, Field } from 'formik'


import { history } from '../../history'
import './Home.css'

const Home = () => {

    return (
        <div>
        <div className="container-fluid">
            <div className="row">
                <div className="home">
                    <div id="menu">
                        <div id='logo'className='col-6'>
                            <div id='logoPrincipal'>
                                GOAL
                            </div>
                            <div id='saldoGeral'>Saldo Geral <br/> R$000,000
                            </div>
                            <div>
                                <p>Minhas Metas</p>
                            </div>
                            </div>
                            <ul id='listaMenu'>
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
                            <li>
                                <a href="url">Conta</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6'>

                        <div id='boasVindas'>
                           <h5 className='text-left'><b> Olá, nome <br/> 
                            Acompanhe suas metas:
                            </b></h5>
                        </div>
                    </div>
                    <div className='col-6'>
                        <ul id='metas'>
                            <li className='row'>
                                <span className='col-5'>
                                   <b> META 1 </b><br/> 
                                    <small>Maio/2022</small>
                                </span>
                                <span className='col-3 text-success text-center'>
                                    +100,00
                                </span>
                                <span className='col-4 text-center'>
                                 <b> R$20.000 </b>
                                </span>
                            </li>
                            <li className='row'>
                                <span className='col-5'>
                                   <b> META 2 </b><br/> 
                                    <small>Maio/2022</small>
                                </span>
                                <span className='col-3 text-success text-center'>
                                    +100,00
                                </span>
                                <span className='col-4 text-center'>
                                 <b> R$20.000 </b>
                                </span>
                            </li>
                            <li className='row'>
                                <span className='col-5'>
                                   <b> META 3 </b><br/> 
                                    <small>Maio/2022</small>
                                </span>
                                <span className='col-3 text-success text-center'>
                                    +100,00
                                </span>
                                <span className='col-4 text-center'>
                                 <b> R$20.000 </b>
                                </span>
                            </li>
                            <li className='row'>
                                <span className='col-5'>
                                   <b> META 4 </b><br/> 
                                    <small>Maio/2022</small>
                                </span>
                                <span className='col-3 text-success text-center'>
                                    +100,00
                                </span>
                                <span className='col-4 text-center'>
                                 <b> R$20.000 </b>
                                </span>
                            </li>
                            <li className='row'>
                                <span className='col-5'>
                                   <b> META 5 </b><br/> 
                                    <small>Maio/2022</small>
                                </span>
                                <span className='col-3 text-success text-center'>
                                    +100,00
                                </span>
                                <span className='col-4 text-center'>
                                 <b> R$20.000 </b>
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
            <footer></footer>
            </div>
    )
}

export default Home
