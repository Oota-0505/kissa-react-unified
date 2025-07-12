import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link className={styles.headerLogo} to="/" onClick={closeMenu}>
          <img src="/images/common/logo-header.png" alt="KISSA" />
        </Link>
        <button 
          className={styles.toggleMenuButton} 
          onClick={toggleMenu}
          aria-label="メニューを開く"
        ></button>
        <div className={`${styles.headerSiteMenu} ${isMenuOpen ? styles.isShow : ''}`}>
          <nav className={styles.siteMenu}>
            <ul>
              <li><Link to="/concept" onClick={closeMenu}>CONCEPT</Link></li>
              <li><Link to="/menu" onClick={closeMenu}>MENU</Link></li>
              <li><Link to="/shop" onClick={closeMenu}>SHOP</Link></li>
              <li><Link to="/access" onClick={closeMenu}>ACCESS</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

