import styles from "./Loading.module.scss"

export default function Loading({ active }) {
  return (
    <div className={`${styles.loadingFade} ${active ? styles.isActive : ""}`}></div>
  )
}
