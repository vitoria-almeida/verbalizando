import styles from './App.module.css'
import GameContainer from "./components/GameContainer"
import GameoverContainer from "./components/GameoverContainer"
import StartContainer from "./components/StartContainer"

import { wordsList } from "./data/words"

import { useEffect, useState } from "react"

function App() {
  const stages = [
    {id: 1, stage: "start"},
    {id: 2, stage: "game"},
    {id: 3, stage: "gameover"}
  ]

  const [gameStage, setGameStage] = useState(stages[0].stage)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [chances, setChances] = useState(5)
  const [score, setScore] = useState(0)

  function randomCategoryAndWord() {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {category, word}
  }

  const startGame = () => {
    const {category, word} = randomCategoryAndWord()

    //transforming a word in an array of letters
    let wordsLetters = word.split('')
    wordsLetters = wordsLetters.map((letter) => letter.toLowerCase())

    //setting states with variables created above
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordsLetters)

    setGameStage(stages[1].stage)
  }

  const verifyLetter = (letter) => {
    const defaultLetter = letter.toLowerCase()

    if(guessedLetters.includes(defaultLetter) || wrongLetters.includes(defaultLetter)) {
      return 
    }

    if(letters.includes(defaultLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, defaultLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, defaultLetter
      ])
      setChances((actualGuesses) => actualGuesses - 1)
    }
  }

  function clearGame() {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(chances <= 0) {
      clearGame()
      setGameStage(stages[2].stage)
    }
  }, [chances])

  const retry = () => {
    setScore(0)
    setChances(5)
    setGameStage(stages[0].stage)
  }

  return (
    <div className={styles.divApp}>
      {gameStage === 'start' && <StartContainer startGame={startGame}/>}
      {gameStage === 'game' && <GameContainer verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} chances={chances} score={score}/>}
      {gameStage === 'gameover' && <GameoverContainer retry={retry}/>}
    </div>
  )
}

export default App