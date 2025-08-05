import styles from "../Styles/CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Ready to Transform Your Business?</h2>
            <p className={styles.subtitle}>
              Join hundreds of satisfied clients who have revolutionized their operations with our cutting-edge IT
              solutions. Get started today with a free consultation.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✅</span>
                <span>Free Initial Consultation</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✅</span>
                <span>Custom Solution Design</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✅</span>
                <span>24/7 Ongoing Support</span>
              </div>
            </div>
          </div>

          <div className={styles.actionContent}>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>
                Get Free Consultation
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className={styles.secondaryButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now: +1 (555) 123-4567
              </button>
            </div>

            <div className={styles.urgency}>
              <span className={styles.urgencyIcon}>⏰</span>
              <span>Limited time offer - Book your consultation this month and get 20% off your first project!</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.pattern}></div>
      </div>
    </section>
  )
}
