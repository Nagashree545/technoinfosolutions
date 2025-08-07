import { useState } from "react"
import styles from "../Styles/Header.module.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <span>T</span>
          </div>
          <span className={styles.logoText}>Techno Infoline Solutions</span>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <a href="/" className={styles.navLink}>
            Home
          </a>
          <a href="/about" className={styles.navLink}>
            About Us
          </a>
          <a href="#services" className={styles.navLink}>
            Services
          </a>
          <a href="/Contact" className={styles.navLink}>
            Contact
          </a>
        </nav>

        <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
