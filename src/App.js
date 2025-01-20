import {FiSearch} from 'react-icons/fi';
import './styles.css';


function App() {
  return (
    <div className="container">
      <h1 className='title'>Buscador de Cep</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite o CEP" />
        <button className="buttonSearch">
          <FiSearch size={25} color='#fff'/>
        </button>
      </div>

      <main className='name'>
        <h2>CEP: 00000-000</h2>

        <span>Rua Teste algum </span>
        <span>Complemento: Algum complemento </span>
        <span>Bairro: cohab </span>
        <span>Cidade: Vitoria - ES </span>

      </main>

    </div>
  );
}

export default App;

