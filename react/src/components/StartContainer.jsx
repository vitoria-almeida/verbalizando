import Button from './Button'
import Title from './Title'

import styles from './css/StartContainer.module.css'

// eslint-disable-next-line react/prop-types
const Container = ({ startGame }) => {
 
    // window.location.reload(false);
  
  return (
    <section className={styles.section}>
        <Title/>
        <Button text="JOGAR" handleOnClick={startGame}/>
    </section>
  )
}

export default Container