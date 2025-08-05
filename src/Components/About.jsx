import styles from "../Styles/About.module.css"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>About Techno Infoline Solutions</h2>
            <p className={styles.description}>
              We are a leading technology solutions provider dedicated to helping businesses transform and thrive in the
              digital age. With years of experience and a team of expert professionals, we deliver innovative IT
              solutions that drive growth and efficiency.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Happy Clients</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>1000+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support Available</div>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.techIcon}>💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
