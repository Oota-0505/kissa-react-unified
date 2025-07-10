import styles from "./Button.module.scss"

export default function Button({children, onClick}) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <span className={styles.buttonInner}>{ children }</span>
    </button>
  )
}
