import styles from './App.module.css'
import GameContainer from "./components/GameContainer"
import GameoverContainer from "./components/GameoverContainer"
import StartContainer from "./components/StartContainer"

import { wordsList } from "./data/words"

import { useCallback, useEffect, useState } from "react"

const stages = [
  {id: 1, stage: "start"},
  {id: 2, stage: "game"},
  {id: 3, stage: "gameover"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].stage)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [chances, setChances] = useState(5)
  const [score, setScore] = useState(0)

  const randomCategoryAndWord = useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {category, word}
  }, [words])

  const startGame = useCallback(() => {
    const {category, word} = randomCategoryAndWord()

    //transforming a word in an array of letters
    let wordsLetters = word.toLowerCase().split('')

    //setting states with variables created above
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(wordsLetters)
    console.log(word)

    setGameStage(stages[1].stage)
  }, [randomCategoryAndWord])

  const verifyLetter = (letter) => {
    const defaultLetter = letter.toLowerCase()

    if(guessedLetters.includes(defaultLetter) || wrongLetters.includes(defaultLetter)) {
      return 
    }

    if(letters.includes(defaultLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, letter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, defaultLetter
      ])
      setChances((actualGuesses) => actualGuesses - 1)
    }
  }

  //restarts game
  const retry = () => {
    setScore(0)
    setChances(5)
    setGameStage(stages[0].stage)
  }

  const clearGame = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  //GAME OVER
  useEffect(() => {
    if(chances === 0) {
      clearGame()
      setGameStage(stages[2].stage)
    }
  }, [chances])

  //WIN
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length && gameStage === stages[1].stage) {
      setScore((actualScore) => actualScore += 100)
      setTimeout(() => clearGame(), 1000);
    }

  }, [gameStage, guessedLetters, letters, startGame])

  return (
    <div className={styles.divApp}>
      {gameStage === 'start' && <StartContainer startGame={startGame}/>}
      {gameStage === 'game' && <GameContainer verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} chances={chances} score={score}/>}
      {gameStage === 'gameover' && <GameoverContainer retry={retry} score={score}/>}
    </div>
  )
}

export default App