import imgPerfil from './img/perfil_leo_redonda.jpg'
import './App.css';

function App() {
  function mensagem() {
    alert `Boa noite! Vamos codar 🧑🏻‍💻`
  }
  return (
    <div className="App">
      <h1>Olá! Eu sou o Leandro</h1>
      <img className="img-perfil" src={imgPerfil} alt="foto de perfil Leandro" />
      <p>Este é o meu primeiro site React</p>
      <button onClick={mensagem}> Clique aqui! </button>
    </div>
  );
}

export default App;
