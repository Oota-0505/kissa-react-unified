import { useState, useEffect } from "react";
import styles from "./Loading.module.scss";

// 4案：カフェ風コーヒーカップ＋湯気
export function CoffeeLoading() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <div className={styles.coffeeLoading}>
      <div className={styles.coffeeCup}>
        <div className={styles.steam1}></div>
        <div className={styles.steam2}></div>
        <div className={styles.steam3}></div>
        <div className={styles.cupBody}></div>
        <div className={styles.cupHandle}></div>
        <div className={styles.coffee}></div>
        <div className={styles.cupShadow}></div>
      </div>
    </div>
  );
}

// 二重リングスピナー（2秒）
export default function Loading() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <div className={styles.doubleRingLoading}>
      <div className={styles.outerRing}></div>
      <div className={styles.innerRing}></div>
    </div>
  );
}
