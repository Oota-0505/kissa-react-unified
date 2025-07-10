import styles from "./Result.module.scss"
import Confetti from 'react-confetti'

export default function Result({maxQuizlen, correctNumLen }) {
  return (
    <>
    <div className={styles.result}>
      あなたの正解数は...
      <span className={styles.resultHighlight}>
        {`全${maxQuizlen}問中、${correctNumLen}問正解でした！`}
      </span>
    </div>
    <Confetti />
    </>
  )

}
