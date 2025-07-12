import { useFadeIn, useScrollAnimation, usePageTransition } from '../hooks/useAnimation'
import styles from './MenuPage.module.scss'

const MenuPage = () => {
  const [titleRef, titleVisible] = useFadeIn(200)
  const [menuRef, menuVisible] = useScrollAnimation(0.2)

  return (
    <div className="pageTransition">
      <main className={styles.main}>
        <div 
          ref={titleRef}
          className={`${styles.title} fadeIn ${titleVisible ? 'visible' : ''}`}
        >
          <h1>MENU</h1>
          <p>メニュー</p>
        </div>
        
        <ul 
          ref={menuRef}
          className={`${styles.itemList} scrollFadeIn ${menuVisible ? 'visible' : ''}`}
        >
          <li className="hoverLift imageAnimation delay-100">
            <img src="/images/menu/img-item01.jpg" alt="アメリカーノの商品画像" />
            <dl>
              <dt>アメリカーノ</dt>
              <dd>浅煎りの豆をこだわりの配合でブレンドした、スッキリと爽やかな飲み口の当店看板メニュー。ホットでもアイスでも。</dd>
            </dl>
            <p className={styles.price}>¥420</p>
            <p className={styles.itemLabel}>AMERICANO</p>
          </li>
          <li className="hoverLift imageAnimation delay-200">
            <img src="/images/menu/img-item02.jpg" alt="カフェラテの商品画像" />
            <dl>
              <dt>カフェラテ</dt>
              <dd>エスプレッソとミルク、この組み合わせに勝るものはなかなか見つかりません。ホッとしたいとき、やっぱりラテが欲しくなる。</dd>
            </dl>
            <p className={styles.price}>¥460</p>
            <p className={styles.itemLabel}>CAFE LATTE</p>
          </li>
          <li className="hoverLift imageAnimation delay-300">
            <img src="/images/menu/img-item03.jpg" alt="レモネードの商品画像" />
            <dl>
              <dt>レモネード</dt>
              <dd>瀬戸内海に浮かぶ小島で、オーナー自らが栽培したとっておきのレモンを、たっぷりと使った自慢のレモネードです。</dd>
            </dl>
            <p className={styles.price}>¥420</p>
            <p className={styles.itemLabel}>LEMONADE</p>
          </li>
          <li className="hoverLift imageAnimation delay-400">
            <img src="/images/menu/img-item04.jpg" alt="ホットドッグ_チリの商品画像" />
            <dl>
              <dt>ホットドッグ_チリ</dt>
              <dd>ちょっと小腹が空いたとき、あると嬉しいホットドッグ。特製チリソースとチーズをかければ、もう言葉はいりません。</dd>
            </dl>
            <p className={styles.price}>¥540</p>
            <p className={styles.itemLabel}>HOTDOG CHILI</p>
          </li>
          <li className="hoverLift imageAnimation delay-500">
            <img src="/images/menu/img-item05.jpg" alt="レーズンバターサンドの商品画像" />
            <dl>
              <dt>レーズンバターサンド</dt>
              <dd>コーヒーに合うお菓子を追求して生まれた当店の大人気メニュー。数量・季節ともに限定のため、見つけたらぜひお試しを。</dd>
            </dl>
            <p className={styles.price}>¥480</p>
            <p className={styles.itemLabel}>RAISIN BUTTER SAND</p>
          </li>
          <li className="hoverLift imageAnimation delay-100">
            <img src="/images/menu/img-item06.jpg" alt="チーズケーキの商品画像" />
            <dl>
              <dt>チーズケーキ</dt>
              <dd>クセのないマイルドな風味と、柔らかでクリーミーな口どけのチーズを使用した定番メニュー。いちごは自家菜園で採れたオーガニック。</dd>
            </dl>
            <p className={styles.price}>¥480</p>
            <p className={styles.itemLabel}>CHEESECAKE</p>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default MenuPage

