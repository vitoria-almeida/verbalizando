/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import Button from './Button'
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
      <h4>Pontuação: {score}</h4>
      <h2>Adivinhe a Palavra</h2>
      <h3>Dica: <span className={styles.dica}>{pickedCategory}</span></h3>
      <p>Você ainda tem {chances} tentativa(s).</p>

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
          <Button text='JOGAR'/>
        </form>
      </div>

      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, index) => (
          <span key={index}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default GameContainer