import React from 'react';                       // importa o react para dentro da aplicação - local no node
import ReactDOM from 'react-dom/client';         // para usar o virtualDom (vai direto no elemento)
import './index.css';                            // importando o index.css - assim que eu importo um arquivo.
import App from './App'; 
import Relogio from './components/Relogio'; 
import Letreiro from './components/Letreiro';                         // componente - importando componente que se chama app. *import Relogio from './Relogio';*
import reportWebVitals from './reportWebVitals'; // Projeto google que vai ajudar o google a gerar estatísticas sobre o meu app. Dá pra tirar no app
import MinhasRotas from "./minhasRotas";

  function Index() {
    return (
      <MinhasRotas/>
      <Letreiro/>
      <Relogio/>
    );
  }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default Index;
