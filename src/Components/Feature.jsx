import styles from "../Styles/Feature.module.css"

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast Performance",
    description: "Optimized solutions that deliver exceptional speed and reliability for your business operations.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Military-grade security protocols to protect your sensitive data and business assets.",
  },
  {
    icon: "📈",
    title: "Scalable Solutions",
    description: "Grow your business with our flexible and scalable technology infrastructure.",
  },
  {
    icon: "🎯",
    title: "24/7 Expert Support",
    description: "Round-the-clock technical support from our certified IT professionals.",
  },
]

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>WHY CHOOSE US</span>
          <h2 className={styles.title}>Built for Modern Businesses</h2>
          <p className={styles.subtitle}>
            Experience the difference with our cutting-edge technology solutions designed for today's digital landscape.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
