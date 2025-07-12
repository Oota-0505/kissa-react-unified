import { Link } from 'react-router-dom'
import { useFadeIn, useScrollAnimation, usePageTransition } from '../hooks/useAnimation'
import styles from './HomePage.module.scss'

const HomePage = () => {
  const isLoading = usePageTransition()
  const [heroRef, heroVisible] = useFadeIn(200)
  const [leadRef, leadVisible] = useScrollAnimation(0.2)
  const [recommendedRef, recommendedVisible] = useScrollAnimation(0.1)

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="pageTransition">
      <main className={styles.main}>
        <div className={styles.firstView}>
          <div 
            ref={heroRef}
            className={`${styles.firstViewText} fadeIn ${heroVisible ? 'visible' : ''}`}
          >
            <h1>Imagination will <br />take you everywhere.</h1>
            <p>コーヒーを待つ時間も、特別なひとときになる。</p>
          </div>
        </div>

        <div className={`${styles.quizBanner} scrollFadeIn ${leadVisible ? 'visible' : ''}`}>
          <p>クイズに答えて初回500円引きクーポンをゲット</p>
          <Link to="/quiz" className={`${styles.quizButton} buttonAnimation`}>今すぐチャレンジ！</Link>
        </div>

        <div 
          ref={leadRef}
          className={`${styles.lead} scrollFadeIn ${leadVisible ? 'visible' : ''}`}
        >
          <p>
            「想像力はあなたをどこにでも連れて行ってくれる」<br />注文を待つ間に広げた、一冊の本の中に見つけたことば。<br />ゆったり流れる時間の中で、想像をふくらませる楽しさを思い出す。<br />そんな時間を過ごすとき、おいしいコーヒーがあるとうれしい。
          </p>
          <div className={styles.linkButtonArea}>
            <Link className={`${styles.linkButton} buttonAnimation`} to="/concept">CONCEPT</Link>
          </div>
        </div>
        
        <div 
          ref={recommendedRef}
          className={`${styles.recommended} scrollFadeIn ${recommendedVisible ? 'visible' : ''}`}
        >
          <h2>RECOMMENDED</h2>
          <ul className={styles.itemList}>
            <li className={`hoverLift imageAnimation delay-100`}>
              <img src="/images/index/img-item01.jpg" alt="カフェラテの商品画像" />
              <dl>
                <dt>カフェラテ</dt>
                <dd>エスプレッソとミルク、この組み合わせに勝るものはなかなか見つかりません。ホッとしたいとき、やっぱりラテが欲しくなる。</dd>
              </dl>
              <p className={styles.price}>¥460</p>
            </li>
            <li className={`hoverLift imageAnimation delay-200`}>
              <img src="/images/index/img-item02.jpg" alt="レーズンバターサンドの商品画像" />
              <dl>
                <dt>レーズンバターサンド</dt>
                <dd>コーヒーに合うお菓子を追求して生まれた当店の大人気メニュー。数量・季節ともに限定のため、見つけたらぜひお試しを。</dd>
              </dl>
              <p className={styles.price}>¥480</p>
            </li>
            <li className={`hoverLift imageAnimation delay-300`}>
              <img src="/images/index/img-item03.jpg" alt="アメリカーノの商品画像" />
              <dl>
                <dt>アメリカーノ</dt>
                <dd>浅煎りの豆をこだわりの配合でブレンドした、 スッキリと爽やかな飲み口の当店看板メニュー。ホットでもアイスでも。</dd>
              </dl>
              <p className={styles.price}>¥420</p>
            </li>
            <li className={`hoverLift imageAnimation delay-400`}>
              <img src="/images/index/img-item04.jpg" alt="レモネードの商品画像" />
              <dl>
                <dt>レモネード</dt>
                <dd>瀬戸内海に浮かぶ小島で、オーナー自らが栽培したとっておきのレモンを、たっぷりと使った自慢のレモネードです。</dd>
              </dl>
              <p className={styles.price}>¥420</p>
            </li>
            <li className={`hoverLift imageAnimation delay-500`}>
              <img src="/images/index/img-item05.jpg" alt="ホットドッグ - チリの商品画像" />
              <dl>
                <dt>ホットドッグ - チリ</dt>
                <dd>ちょっと小腹が空いたとき、あると嬉しいホットドッグ。特製チリソースとチーズをかければ、もう言葉はいりません。</dd>
              </dl>
              <p className={styles.price}>¥540</p>
            </li>
          </ul>
          <div className={styles.linkButtonArea}>
            <Link className={`${styles.linkButton} buttonAnimation`} to="/menu">MENU</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage

