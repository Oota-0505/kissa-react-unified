import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useFadeIn, usePageTransition } from '../hooks/useAnimation'
import quizData from "../data/quiz";
import { ROUTES } from "../const";
import styles from './QuizPage.module.scss'

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;
  const isLoading = usePageTransition();
  const [containerRef, containerVisible] = useFadeIn(200);

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs(prev => [...prev, true]);
    } else {
      setAnswerLogs(prev => [...prev, false]);
    }
    setQuizIndex(prev => prev + 1);
  };

  useEffect(() => {
    if (answerLogs.length === MAX_QUIZ_LEN) {
      const correctNum = answerLogs.filter(answer => answer === true);
      navigation(ROUTES.RESULT, {
        state: {
          maxQuizlen: MAX_QUIZ_LEN,
          correctNumLen: correctNum.length
        }
      });
    }
  }, [answerLogs, MAX_QUIZ_LEN, navigation]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className="loading">Loading...</div>
        <p className={styles.loadingText}>クイズを準備中...</p>
      </div>
    );
  }

  const progressPercentage = ((quizIndex) / MAX_QUIZ_LEN) * 100;

  return (
    <div className="pageTransition">
      <Header />
      <main className={styles.main}>
        <div 
          ref={containerRef}
          className={`${styles.container} fadeIn ${containerVisible ? 'visible' : ''}`}
        >
          <div className={styles.header}>
            <h1>KISSA クイズ</h1>
            <p className={styles.subtitle}>コーヒーの知識をテストして、特別なクーポンをゲットしよう！</p>
          </div>

          <div className={styles.quizInfo}>
            <span>問題 {quizIndex + 1} / {MAX_QUIZ_LEN}</span>
            <span>{Math.round(progressPercentage)}% 完了</span>
          </div>

          <div className={styles.progressBar}>
            <div 
              className={styles.progress} 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          {quizData[quizIndex] && (
            <>
              <div className={styles.questionSection}>
                <p className={styles.questionText}>
                  Q{quizIndex + 1}. {quizData[quizIndex].question}
                </p>
              </div>

              <div className={styles.optionsGrid}>
                {quizData[quizIndex].options.map((option, index) => (
                  <button
                    key={`option-${index}`}
                    className={`${styles.optionButton} buttonAnimation`}
                    onClick={() => handleClick(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

          <Link to="/" className={styles.backButton}>
            ホームに戻る
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

