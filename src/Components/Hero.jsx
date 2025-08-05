"use client"
import { useState, useEffect } from "react"
import styles from "../Styles/Hero.module.css"

const heroSlides = [
  {
    title: "Transform Your Business with",
    highlight: "Advanced IT Solutions",
    subtitle:
      "Empowering enterprises with cutting-edge technology, cybersecurity, and cloud infrastructure for digital transformation.",
    image: "🚀",
  },
  {
    title: "Secure Your Digital",
    highlight: "Future Today",
    subtitle:
      "Comprehensive cybersecurity solutions to protect your business from evolving threats and ensure data integrity.",
    image: "🔒",
  },
  {
    title: "Scale with Confidence using",
    highlight: "Cloud Technologies",
    subtitle: "Migrate to the cloud seamlessly with our expert guidance and 24/7 support for optimal performance.",
    image: "☁️",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentHero = heroSlides[currentSlide]

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⚡</span>
              LEADING IT SOLUTIONS PROVIDER
            </div>

            <div className={`${styles.textContent} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
              <h1 className={styles.title}>
                {currentHero.title}
                <br />
                <span className={styles.highlight}>{currentHero.highlight}</span>
              </h1>
              <p className={styles.subtitle}>{currentHero.subtitle}</p>
            </div>

            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>
                Get Started
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className={styles.secondaryButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                Watch Demo
              </button>
            </div>

            <div className={styles.trustBadges}>
              <span>Trusted by 500+ companies worldwide</span>
              <div className={styles.companyLogos}>
                <div className={styles.companyLogo}>🏢</div>
                <div className={styles.companyLogo}>🏭</div>
                <div className={styles.companyLogo}>🏪</div>
                <div className={styles.companyLogo}>🏬</div>
              </div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.heroVisual}>
              <div className={styles.mainCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.cardTitle}>Techno Infoline Dashboard</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.heroIcon}>{currentHero.image}</div>
                  <div className={styles.progressBars}>
                    <div className={styles.progressBar}>
                      <span>System Performance</span>
                      <div className={styles.progress}>
                        <div className={styles.progressFill} style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div className={styles.progressBar}>
                      <span>Security Status</span>
                      <div className={styles.progress}>
                        <div className={styles.progressFill} style={{ width: "98%" }}></div>
                      </div>
                    </div>
                    <div className={styles.progressBar}>
                      <span>Cloud Integration</span>
                      <div className={styles.progress}>
                        <div className={styles.progressFill} style={{ width: "92%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCards}>
                <div className={styles.floatingCard}>
                  <span className={styles.floatingIcon}>📊</span>
                  <span>Analytics</span>
                </div>
                <div className={styles.floatingCard}>
                  <span className={styles.floatingIcon}>🛡️</span>
                  <span>Security</span>
                </div>
                <div className={styles.floatingCard}>
                  <span className={styles.floatingIcon}>⚙️</span>
                  <span>Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.slideIndicators}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.active : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  )
}
