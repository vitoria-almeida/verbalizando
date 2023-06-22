import styles from './StartContainer.module.css'
import Title from './Title'

const Container = () => {
  return (
    <section className={styles.section}>
        <Title/>
        <button className={styles.button}>JOGAR</button>
    </section>
  )
}

export default Container