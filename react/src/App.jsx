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

  return (
    <>
      {gameStage === 'start' && <StartContainer/>}
      {gameStage === 'game' && <GameContainer/>}
      {gameStage === 'gameover' && <GameoverContainer/>}
    </>
  )
}

export default App
