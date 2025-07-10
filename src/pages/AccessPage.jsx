import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './AccessPage.module.scss'

const AccessPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>ACCESS</h1>
          <p>アクセス・お問い合わせ</p>
        </div>
        <div className={styles.map}>
          <h2>アクセスマップ</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.400463175863!2d138.31353077647552!3d35.86370191992762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601c6987d64042f7%3A0xf6a5d71dff896602!2z5bCP5re15rKi6aeF!5e0!3m2!1sja!2sjp!4v1718417852381!5m2!1sja!2sjp"
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.contact}>
          <h2>お問い合わせフォーム</h2>
          <form action="#">
            <dl className={styles.formArea}>
              <dt><span className={styles.required}>お名前</span></dt>
              <dd><input className={styles.inputText} type="text" name="name" required /></dd>
              <dt><span className={styles.required}>メールアドレス</span></dt>
              <dd><input className={styles.inputText} type="email" name="e-mail" required /></dd>
              <dt>お電話番号</dt>
              <dd><input className={styles.inputText} type="tel" name="tel" /></dd>
              <dt>お問い合わせ種別</dt>
              <dd>
                <select className={styles.selectBox} name="genre">
                  <option value="ご予約について" defaultValue>ご予約について</option>
                  <option value="メニューについて">メニューについて</option>
                  <option value="営業時間について">営業時間について</option>
                </select>
              </dd>
              <dt>お客様について</dt>
              <dd>
                <label className={styles.radioButton}>
                  <input type="radio" name="user-type" value="一般のお客様" defaultChecked />
                  一般のお客様
                </label>
                <label className={styles.radioButton}>
                  <input type="radio" name="user-type" value="お取引先様" />
                  お取引先様
                </label>
                <label className={styles.radioButton}>
                  <input type="radio" name="user-type" value="その他" />
                  その他
                </label>
              </dd>
              <dt><span className={styles.required}>お問い合わせ内容</span></dt>
              <dd>
                <textarea className={styles.message} name="message" required></textarea>
              </dd>
            </dl>
            <p className={styles.confirmText}>ご入力内容をご確認の上、お間違いがなければ[Submit]ボタンを押してください。</p>
            <button className={styles.submitButton} type="submit">Submit</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AccessPage

