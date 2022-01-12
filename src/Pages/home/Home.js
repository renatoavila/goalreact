import React from 'react'

import axios from 'axios'
import { Formik, Form, Field } from 'formik'


import { history } from '../../history'
import './Home.css'

const Home = () => {
         var usuario = JSON.parse(localStorage.getItem('usuario'));
         const [post, setPost] = React.useState(null); 

         React.useEffect(() => {
         axios.get('https://goalapifiap.herokuapp.com/api/pessoa/'+ usuario.codigo + '/conta/')
            .then(resp => {   
                setPost(resp.data);
            }); 
        }, []);

        if (!post) return null;

           console.log(post);

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
                            <div id='saldoGeral'>Total Investido <br/> {(post.saldoTotal - post.saldoLivre).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
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
                           <h5 className='text-left'><b> Olá, {usuario.nome} <br/> 
                            Acompanhe suas metas:
                            </b></h5>
                        </div>
                    </div>
                    <div className='col-6'>
                        <ul id='metas'>
                            {
                                post.cofre.map(el =>  
                                    <li className='row'>
                                        <span className='col-5'>
                                        <b> {el.nome} </b><br/> 
                                            <small>{el.vencimentoMeta}</small>
                                        </span>
                                        <span className='col-3 text-success text-center'>
                                        <b> Valor Acumulado</b><br/> 
                                        {el.valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                                        </span>
                                        <span className='col-4 text-center'>
                                        <b> Meta</b><br/> 
                                        <b> {el.valorMeta.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}  </b>
                                        </span>
                                    </li>
                                    )
                            }
                             


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
