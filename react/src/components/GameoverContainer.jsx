import Button from './Button'

// eslint-disable-next-line react/prop-types
const GameoverContainer = ({ retry, score }) => {
  return (
    <div>
      <h2>Game Over! :(</h2>
      <h3>A sua pontuação foi: <span>{score}</span></h3>
      <Button text='JOGAR NOVAMENTE' handleOnClick={retry}/>
    </div>
  )
}

export default GameoverContainer