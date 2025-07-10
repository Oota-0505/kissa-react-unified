import styles from "./Loading.module.scss"

export default function Loading({ active }) {
  return (
    <div className={`${styles.loading} ${active ? styles.isActive : ""}`}>
      <span>さーてどうでしたか</span>
    </div>
  )
}
