import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './index.scss';


const Login = () => {
  return ( 
    <section className="login">
      <Header/>
    <form onSubmit={scannerItens} className="login__form">
      <h1> cadastro de produtos !</h1>
      <h2>insira todos os dados</h2>
      <div className="login__input-wrapper">
        <label htmlFor="name">Digite seu nome:</label>
        <input type="text" placeholder='Nome Completo' id='name' className='login__input-name'/>
        <span id="erroNome"></span>
        
        <label htmlFor="CPF">Digite seu CPF:</label>
        <input type="Number" placeholder='Digite Seu cpf' id='CPF' />
        <span id="erroCPF"></span>   

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder='******' />
        <span id="erroSenha"></span>
        
      </div>

      <div>


      <label htmlFor="nameProduto">Digite nome do produto:</label>
        <input type="text" placeholder='Nome do produto' id='nameProduto' className='login__input-name'/>
        <span id="erroNome"></span>
        
        <label htmlFor="CodigoBarra">Digite o código de barra do produto:</label>
        <input type="Number" placeholder='Código de barra' id='CodigoBarra' className='login__input-email'/>
        <span id="erroCodigoBarra"></span>

        <label htmlFor="price">Preço:</label>
        <input type="Number" id="price" placeholder='******' />
        <span id="erroNumber"></span>
        <label htmlFor="quantidadeProduto">Quantidade produto:</label>
        <input type="Number" id="quantidadeProduto" placeholder='******' />
        <span id="erroquantidadeProduto"></span>
        <label htmlFor="cpf">Degite Seu CPF:</label>
        <input type="CPF" id="CPF" placeholder='******' />
        <span id="erroCpf"></span>
      </div>
    
        <button type='submit'>
          <Link to={`/home`}>Entrar</Link> 
        </button><p>
        <span id="sucess"></span>
        </p>
      </form>
    </section> 
  );
};


function scannerItens (value) {
  event.preventDefault();
    
  const nome = event.target.querySelector("#name");
  const senha = event.target.querySelector("#password");
  const sucesso = event.target.querySelector("#sucess");

  const nomeVazio = event.target.querySelector("#erroNome");
  const senhaVazia = event.target.querySelector("#erroSenha");
  const erroMsg = "*Campo Obrigatório"

  if (nome.value === '') {
      nomeVazio.style.visibility = 'visible'
      nomeVazio.style.fontFamily = 'Raleway'
      nomeVazio.style.fontSize = '10px'
      nomeVazio.style.color = 'red'
      nomeVazio.textContent = erroMsg
      nome.style.border = '2px solid red'
  } else {
      nomeVazio.style.visibility = 'hidden'
      nome.style.border = '2px solid gray'
  }

  if (senha.value === '') {
      senhaVazia.style.visibility = 'visible'
      senhaVazia.style.fontFamily = 'Raleway'
      senhaVazia.style.fontSize = '10px'
      senhaVazia.style.color = 'red'
      senhaVazia.textContent = erroMsg
      senha.style.border = '2px solid red'
  } else {
      senhaVazia.style.visibility = 'hidden'
      senhaVazia.style.fontSize = '10px'
      senha.style.border = '2px solid gray'
  };

  if (nome.value != '' && senha.value != '') {
      sucesso.textContent = 'Sucesso!!'
      sucesso.style.color = 'green'
      sucesso.style.fontFamily = 'Raleway'
      sucesso.style.fontSize = '15px'

      sucesso.style.visibility = 'visible'
      nomeVazio.style.visibility = 'hidden'
      senhaVazia.style.visibility = 'hidden'
      
  } else {
      sucesso.style.fontFamily = 'Raleway';
      sucesso.textContent = "Campos obrigatórios não preenchidos!"
      sucesso.style.color = 'red'
      sucesso.style.visibility = 'visible'
      sucesso.style.fontSize = '15px'
  }
}
export default Login