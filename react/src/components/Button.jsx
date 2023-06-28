/* eslint-disable react/prop-types */
import styles from './css/Button.module.css'

const Button = ({ handleOnClick, text }) => {
  return (
    <div className={styles.wrapper}>
      <a onClick={handleOnClick}><span>{text}</span></a>
    </div>
  )
}

export default Button