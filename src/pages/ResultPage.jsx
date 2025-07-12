import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFadeIn, usePageTransition } from '../hooks/useAnimation'
import { ROUTES } from "../const";
import styles from './ResultPage.module.scss'

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const isLoading = usePageTransition();
  const [containerRef, containerVisible] = useFadeIn(500);
  
  const maxQuizlen = location.state?.maxQuizlen || 0;
  const correctNumLen = location.state?.correctNumLen || 0;
  const scorePercentage = Math.round((correctNumLen / maxQuizlen) * 100);

  useEffect(() => {
    setTimeout(() => setActive(true), 2000);
  }, []);

  const getResultMessage = () => {
    if (scorePercentage >= 80) {
      return "素晴らしい！コーヒーマスターですね！";
    } else if (scorePercentage >= 60) {
      return "よくできました！コーヒー通ですね！";
    } else if (scorePercentage >= 40) {
      return "まずまずです！もう少し勉強してみましょう。";
    } else {
      return "頑張りましょう！コーヒーの世界は奥深いです。";
    }
  };

  const getCouponDiscount = () => {
    if (scorePercentage >= 80) return "500円";
    if (scorePercentage >= 60) return "300円";
    if (scorePercentage >= 40) return "200円";
    return "100円";
  };

  if (isLoading || !active) {
    return (
      <div className={styles.loadingContainer}>
        <div className="loading">Loading...</div>
        <p className={styles.loadingText}>結果を集計中...</p>
      </div>
    );
  }

  return (
    <div className="pageTransition">
      <main className={styles.main}>
        <div 
          ref={containerRef}
          className={`${styles.container} fadeIn ${containerVisible ? 'visible' : ''}`}
        >
          <div className={styles.header}>
            <h1>クイズ結果</h1>
            <p className={styles.subtitle}>お疲れさまでした！</p>
          </div>

          <div className={styles.resultSection}>
            <div className={styles.scoreDisplay}>
              <div className={styles.progressRing}>
                <svg width="120" height="120">
                  <circle
                    className={styles.background}
                    cx="60"
                    cy="60"
                    r="50"
                  />
                  <circle
                    className={styles.progress}
                    cx="60"
                    cy="60"
                    r="50"
                    style={{ '--progress': scorePercentage }}
                  />
                </svg>
              </div>
              <div className={styles.score}>
                {correctNumLen} / {maxQuizlen}
              </div>
              <div className={styles.scoreText}>
                正解率: {scorePercentage}%
              </div>
            </div>

            <p className={styles.resultMessage}>
              {getResultMessage()}
            </p>

            <div className={styles.couponSection}>
              <div className={styles.couponTitle}>
                🎉 特別クーポンをゲット！
              </div>
              <p className={styles.couponText}>
                次回のご来店時に{getCouponDiscount()}引きでご利用いただけます
              </p>
              <div className={styles.couponCode}>
                クーポンコード: KISSA{scorePercentage}
              </div>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <Link to={ROUTES.QUIZ} className={styles.primaryButton}>
              もう一度チャレンジ
            </Link>
            <Link to="/" className={styles.secondaryButton}>
              ホームに戻る
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

