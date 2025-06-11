import { useState } from 'react';
import './App.css';

function App() {
  
const imgUrl = 'https://random.dog/woof.json'
  
  return (
    <>
      <header>
        <h1>Gerador De Cachorro Aleatório</h1>
      </header>

      <section>
        
            <img src={imgUrl} alt="Cachorro aleatório" width="300" />
        
        
        <br />
        <hr />
        <input type="button" value="Gerar"  />
      </section>

      <footer>
        <p>&copy; Ramdon Dog</p>
      </footer>
    </>
  );
}

export default App;
