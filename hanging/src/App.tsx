import { useState } from 'react';
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import './App.css'


function App() {

  const [word] = useState('COMPUTADORA');
  const [hiddenword] = useState('_ '.repeat(word.length));
  const [attempts, setAttempts] = useState(0);

  //Oprimir Letra
  const checkLetter = (letter: string) => {

    console.log(letter)
    setAttempts(Math.min(attempts + 1, 9)); //Números de intentos no pasen de 9

  }

  return (

    <div className='App'>

      {/* Imagenes*/}
      <HangImage imageNumber={attempts} />


      {/* Palabra Oculata*/}
      <h3>{hiddenword}</h3>

      {/* Contador de Intentos*/}
      <h3>Intentos: {attempts} </h3>

      {/* Botones de Letras*/}

      {
        letters.map((letter) => (
          <button
            onClick={() => checkLetter(letter)}
            key={letter}>{letter}</button>
        ))
      }

    </div>
  );
};

export default App
