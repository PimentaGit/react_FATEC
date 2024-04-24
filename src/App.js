import logo from './logo.svg'; // importa (pode ser imagens como no contador de h e m)
import './App.css';            // importa o css que faz o logo girar (exemplo)

function App() {              // retorna uma div principal com um reader e uma imagem {logo} é o parâmetro que pega a imagem.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
