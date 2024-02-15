import { useEffect, useState } from 'react';
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import './App.css'


function App() {

  const [word] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttempts] = useState(0); //intentos
  const [lose, setLose] = useState(false); //perdío
  const [won, setWon] = useState(false); //ganó

  //Determinar si perdío
  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  //Determinar si ganó
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hiddenWord])

  //Oprimir Letra
  const checkLetter = (letter: string) => {

    if (lose) return;

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9)); //Números de intentos no pasen de 9
      return;
    }

    const hiddenWordArray = hiddenWord.split(' '); //cortar hiddenWord por espacios y queda un nuevo arreglo (hiddenWordArray)

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '));

  }

  return (

    <div className='App'>

      {/* Imagenes*/}
      <HangImage imageNumber={attempts} />


      {/* Palabra Oculata*/}
      <h3>{hiddenWord}</h3>

      {/* Contador de Intentos*/}
      <h3>Intentos: {attempts} </h3>

      {/* Mensaje si la persona perdío*/}
      {
        (lose)
          ? <h2>Perdío, la palabra era: {word}</h2>
          : ''
      }

     {/* Mensaje si la persona ganó*/}
      {
        (won)
          ? <h2>¡¡¡Felicidades, usted ganó!!!</h2>
          : ''
      }
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
