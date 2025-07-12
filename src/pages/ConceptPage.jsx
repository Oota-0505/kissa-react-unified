import { useFadeIn, useScrollAnimation, usePageTransition } from '../hooks/useAnimation'
import styles from './ConceptPage.module.scss'

const ConceptPage = () => {
  const [titleRef, titleVisible] = useFadeIn(200)
  const [feature1Ref, feature1Visible] = useScrollAnimation(0.2)
  const [feature2Ref, feature2Visible] = useScrollAnimation(0.2)
  const [movieRef, movieVisible] = useScrollAnimation(0.2)

  return (
    <div className="pageTransition">
      <main className={styles.main}>
        <div 
          ref={titleRef}
          className={`${styles.title} fadeIn ${titleVisible ? 'visible' : ''}`}
        >
          <h1>CONCEPT</h1>
          <p>私たちについて</p>
        </div>
        
        <div 
          ref={feature1Ref}
          className={`${styles.feature} slideInLeft ${feature1Visible ? 'visible' : ''}`}
        >
          <div className={styles.featureText}>
            <h2>コーヒーに落とし込まれた日本の喫茶文化</h2>
            <p>「喫茶」とは、もともと鎌倉時代に中国から伝わった、茶を嗜む習慣や作法を指す言葉だったと言います。後に発展した茶道では客人をもてなす心が何よりも大切にされ、茶室です越すひとときは他にない特別な時間を演出します。私たちKISSAは、茶と向き合ってきた日本の文化をコーヒーというカルチャーに落とし込み、訪れるお客さまに特別なひとときを提供したいと考えています。</p>
          </div>
          <div className="imageAnimation">
            <img src="/images/concept/img-item01.gif" alt="コーヒーを淹れている画像" />
          </div>
        </div>
        
        <div 
          ref={feature2Ref}
          className={`${styles.feature} ${styles.reverse} slideInRight ${feature2Visible ? 'visible' : ''}`}
        >
          <div className={styles.featureText}>
            <h2>野菜やフルーツ、お花はできる限り自家菜園で</h2>
            <p>当店のメニューで使用する野菜やフルーツ、そしてディスプレイ用のお花は、可能な限り自家菜園で栽培し収穫したものを使用しています。環境への負担が少ないものや、目の届く範囲できちんと愛情をかけて育てられたものをお客さまに提供したいと考えているからです。当ホームページに併設しているオンラインショップでは、スタッフが厳選した園芸用品も販売していていますので、ぜひご覧ください。</p>
          </div>
          <div className="imageAnimation">
            <img src="/images/concept/img-item02.jpg" alt="ケーキとドライフラワーの画像" />
          </div>
        </div>
        
        <div 
          ref={movieRef}
          className={`${styles.movie} scaleIn ${movieVisible ? 'visible' : ''}`}
        >
          <h2>CONCEPT MOVIE</h2>
          <iframe 
            src="https://www.youtube.com/embed/bHzURMA0SKc?si=8uT9jAUiRQmgRQzw" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
          <p>家具工場の跡地を改装したインダストリアルな空間に、季節の草花と優しい音楽、そしておいしいコーヒーがお客さまをお待ちしています。</p>
        </div>
      </main>
    </div>
  )
}

export default ConceptPage

