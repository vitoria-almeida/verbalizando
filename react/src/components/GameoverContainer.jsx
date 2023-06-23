import Button from './Button'
import styles from './css/GameoverContainer.module.css'

// eslint-disable-next-line react/prop-types
const GameoverContainer = ({ retry }) => {
  return (
    <div>
      <Button text='JOGAR NOVAMENTE' handleOnClick={retry}/>
    </div>
  )
}

export default GameoverContainer