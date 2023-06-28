/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import styles from './css/GameContainer.module.css'

const GameContainer = ({ verifyLetter, pickedCategory, letters, guessedLetters, wrongLetters, chances, score }) => {
  const [letter, setLetter] = useState('')
  const letterInputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    verifyLetter(letter)
    setLetter('')
    letterInputRef.current.focus()
  }

  return (
    <div className={styles.div}>
      <h4>Pontuação: <span>{score}</span></h4>
      <h2>Adivinhe o <span>{pickedCategory}</span></h2>
      <p>Você ainda tem <span>{chances}</span> tentativa(s).</p>

      <div className={styles.wordContainer}>
        {letters.map((letter, index) => (
          guessedLetters.includes(letter) 
          ? <span key={index} className={styles.letter}>{letter}</span>
          : <span key={index} className={styles.blankLine}></span>
        ))}       
      </div>

      <div className={styles.letterContainer}>
        <p>Escolha uma letra:</p>
        <form onSubmit={handleSubmit}>
          <input type='text' name='letter' maxLength='1' required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
          <button className={styles.playButton}>JOGAR</button>
        </form>
      </div>

      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, index) => (
          <span key={index} className={styles.wrongLettersContainerSpan}> {letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default GameContainer