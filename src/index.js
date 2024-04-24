import React from 'react';                       // importa o react para dentro da aplicação - local no node
import ReactDOM from 'react-dom/client';         // para usar o virtualDom (vai direto no elemento)
import './index.css';                            // importando o index.css - assim que eu importo um arquivo.
import App from './App'; 
import Relogio from './Relogio'; 
import Letreiro from './Letreiro';                         // componente - importando componente que se chama app. *import Relogio from './Relogio';*
import reportWebVitals from './reportWebVitals'; // Projeto google que vai ajudar o google a gerar estatísticas sobre o meu app. Dá pra tirar no app

const root = ReactDOM.createRoot(document.getElementById('root'));  // reenderiza os componentes. o elemento html está na pasta public
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
