import styles from './ShopPage.module.scss'

const ShopPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>ONLINE SHOP</h1>
        <p>オンラインショップ</p>
      </div>
      <div className={styles.shopContents}>
        <div className={styles.shopItem}>
          <div className={styles.itemGroup}>
            <h2>GARDENING GOODS</h2>
            <ul className={styles.itemList}>
                <li>
                  <a href="./shop-detail.html">
                    <img src="/images/shop/img-item01.jpg" alt="ハンドフォークの商品画像" />
                    <dl>
                      <dt>ハンドフォーク</dt>
                      <dd>ガーデニングの必需品といえる、伝統的な形のハンドフォークです。</dd>
                    </dl>
                  </a>
                </li>
                <li>
                  <a href="./shop-detail.html">
                    <img src="/images/shop/img-item02.jpg" alt="オニオンホーの商品画像" />
                    <dl>
                      <dt>オニオンホー</dt>
                      <dd>地面をならしたり土を起こしたり、さまざまな場面で活躍するツールです。</dd>
                    </dl>
                  </a>
                </li>
                <li>
                  <a href="./shop-detail.html">
                    <img src="/images/shop/img-item03.jpg" alt="除草ピックの商品画像" />
                    <dl>
                      <dt>除草ピック</dt>
                      <dd>レンガの目地などの細かい雑草を除去するのに最適な除草ピックです。</dd>
                    </dl>
                  </a>
                </li>
                <li>
                  <a href="./shop-detail.html">
                    <img src="/images/shop/img-item04.jpg" alt="ガーデン捕虫器の商品画像" />
                    <dl>
                      <dt>ガーデン捕虫器</dt>
                      <dd>木の枝やガーデンに吊るして、害虫を捕獲します。底に果実などを入れて使います。</dd>
                    </dl>
                  </a>
                </li>
                <li>
                  <a href="./shop-detail.html">
                    <img src="/images/shop/img-item05.jpg" alt="誘引麻ひもの商品画像" />
                    <dl>
                      <dt>誘引麻ひも</dt>
                      <dd>家庭菜園に欠かせない誘引用の麻ひもです。多数のカラーをご用意しています。</dd>
                    </dl>
                  </a>
                </li>
                <li>
                  <a href="./shop-detail.html">
                    <img src="/images/shop/img-item06.jpg" alt="ラバーグローブの商品画像" />
                    <dl>
                      <dt>ラバーグローブ</dt>
                      <dd>表面がラバーコーティングされたグローブです。作業時の滑り止めや衝撃の緩和に。</dd>
                    </dl>
                  </a>
                </li>
                <li>
                  <a href="./shop-detail.html">
                    <img src="/images/shop/img-item07.jpg" alt="種保存袋の商品画像" />
                    <dl>
                      <dt>種保存袋</dt>
                      <dd>採種した種を保存しておくための袋。使いやすいポチ袋サイズです。20枚入り。</dd>
                    </dl>
                  </a>
                </li>
                <li>
                  <a href="./shop-detail.html">
                    <img src="/images/shop/img-item08.jpg" alt="クロスの商品画像" />
                    <dl>
                      <dt>クロス</dt>
                      <dd>吸水性に優れたマイクロファイバー製。洗剤を使わず汚れをきれいに落とせます。</dd>
                    </dl>
                  </a>
                </li>
            </ul>
          </div>
        </div>
        <aside className={styles.shopMenu}>
          <div className={styles.shopMenuInner}>
            <h2>ITEM LIST</h2>
            <ul>
                <li><a href="./shop-detail.html">ハンドフォーク</a></li>
                <li><a href="./shop-detail.html">オニオンホー</a></li>
                <li><a href="./shop-detail.html">除草ピック</a></li>
                <li><a href="./shop-detail.html">ガーデン捕虫器</a></li>
                <li><a href="./shop-detail.html">誘引麻ひも</a></li>
                <li><a href="./shop-detail.html">ラバーグローブ</a></li>
                <li><a href="./shop-detail.html">種保存袋</a></li>
                <li><a href="./shop-detail.html">クロス</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default ShopPage

