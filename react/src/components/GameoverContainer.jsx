import Title from './Title'
import styles from './css/GameoverContainer.module.css'

// eslint-disable-next-line react/prop-types
const GameoverContainer = ({ retry, score }) => {
  return (
    <div className={styles.divGameover}>
      <Title/>
      <h2>Game Over! :(</h2>
      <h3>A sua pontuação foi: <span>{score}</span></h3>
      <button className={styles.playButton} onClick={retry}>JOGAR NOVAMENTE</button>
    </div>
  )
}

export default GameoverContainer