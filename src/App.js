import React, { useState, useEffect, KeyboardEvent } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Words from './components/Words';
import Notifcation from './components/Notifcation';
import Popup from './components/Popup';
import { showNotification as show } from './utils/utils';
import { getWordList } from './api/api';
import './App.css';

let words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];



let playable = true;

const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [count, setCount] = useState(0)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    if(count === 0) {
      getWords()
    }
    const handleKeydown = (event) => {
      const { key, keyCode } = event
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            const temp = [...correctLetters, letter]
            setCorrectLetters(temp)
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            const temp = [...wrongLetters, letter]
            setWrongLetters(temp)
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [correctLetters, wrongLetters, playable])

  const playAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([])

    const random = Math.floor(Math.random() * words.length)
    selectedWord = words[random]
  }

  const getWords = async () => {
    words = await getWordList()
    const random = Math.floor(Math.random() * words.length)
    selectedWord = words[random]
    setCount(count + 1)
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Words selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notifcation showNotification={showNotification} />

    </>
  );
}

export default App;
