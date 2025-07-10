import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link className={styles.headerLogo} to="/">
          <img src="/images/common/logo-header.png" alt="KISSA" />
        </Link>
        <button className={styles.toggleMenuButton}></button>
        <div className={styles.headerSiteMenu}>
          <nav className={styles.siteMenu}>
            <ul>
              <li><Link to="/concept">CONCEPT</Link></li>
              <li><Link to="/menu">MENU</Link></li>
              <li><Link to="/shop">SHOP</Link></li>
              <li><Link to="/access">ACCESS</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

