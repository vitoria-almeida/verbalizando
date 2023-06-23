/* eslint-disable react/prop-types */
import styles from './css/Button.module.css'

const Button = ({ handleOnClick, text }) => {
  return (
    <button className={styles.button} onClick={handleOnClick}>{text}</button>
  )
}

export default Button