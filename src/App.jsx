
import { useState } from 'react';
import './App.css';
import gerarImagem from './componentes/gerarImagem';
function App() {
  const [imgUrl, setImgUrl] = useState('');
  const [historico, setHistorico] = useState([])
  const [contador, setContador] = useState(0);


  return (
    <>
      <header>
        <h1>Gerador De Cachorro Aleatório</h1>
      </header>

      <section id='app'>

        {imgUrl.endsWith('mp4') ? (
          <video src={imgUrl} width='300' controls />) :
          (<img src={imgUrl} width='300' />)}

        <br />
        <hr />
        <input type="button" value="Gerar" onClick={() => gerarImagem((url) => {
          setImgUrl(url);
          setHistorico((prev) => [url, ...prev]);
          setContador(contador + 1);
        })}
        />
      </section>
      <section id='hitorico'>
        <h3>Histórico:</h3>
        <ul>
          {historico.map((imgUrl, index) => (
            <li key={index}>
              {imgUrl.endsWith('.mp4') ? (
                <video src={imgUrl} width="80" controls />
              ) : (
                <img src={imgUrl} width="80" />
              )}
            </li>
          ))}
        </ul>

      </section>
      <section id='contador'>
        <h2>Contador: {contador}</h2>

      </section>

      <footer>
        <p>&copy; Ramdon Dog</p>
      </footer>
    </>
  );
}

export default App;
