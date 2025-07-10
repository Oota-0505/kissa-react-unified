import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.siteMenu}>
        <ul>
          <li><Link to="/concept">CONCEPT</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/access">ACCESS</Link></li>
        </ul>
      </nav>
      <Link className={styles.footerLogo} to="/">
        <img src="/images/common/logo-footer.png" alt="KISSA" />
      </Link>
      <p className={styles.footerTel}>TEL 01-2345-6789</p>
      <p className={styles.footerTime}>OPEN Fri-Sun 11:00-16:00</p>
      <p className={styles.copyright}><small>&copy;Kissa</small></p>
    </footer>
  )
}

export default Footer

