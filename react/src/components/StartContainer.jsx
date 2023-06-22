import styles from './css/StartContainer.module.css'
import Title from './Title'

const Container = ({startGame}) => {
  return (
    <section className={styles.section}>
        <Title/>
        <div className={styles.divButton}>
          <button className={styles.button} onClick={startGame}>JOGAR</button>
        </div>
    </section>
  )
}

export default Container