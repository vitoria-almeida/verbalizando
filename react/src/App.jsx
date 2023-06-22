import styles from './App.module.css'
import GameContainer from "./components/GameContainer"
import GameoverContainer from "./components/GameoverContainer"
import StartContainer from "./components/StartContainer"

import { wordsList } from "./data/words"

import { useState } from "react"

function App() {
  const stages = [
    {id: 1, stage: "start"},
    {id: 2, stage: "game"},
    {id: 3, stage: "gameover"},
  ]

  const [gameStage, setGameStage] = useState(stages[0].stage)
  const [words] = useState(wordsList)

  const startGame = () => {
    setGameStage(stages[1].stage)
  }

  return (
    <div className={styles.div}>
      {gameStage === 'start' && <StartContainer startGame={startGame}/>}
      {gameStage === 'game' && <GameContainer/>}
      {gameStage === 'gameover' && <GameoverContainer/>}
    </div>
  )
}

export default App
