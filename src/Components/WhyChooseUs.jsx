    import styles from "../Styles/WHychooseus.module.css"

const reasons = [
  {
    icon: "🏆",
    title: "Industry Expertise",
    description: "Over 10 years of experience in delivering cutting-edge IT solutions across various industries.",
  },
  {
    icon: "🔧",
    title: "Custom Solutions",
    description: "Tailored technology solutions designed specifically for your business needs and requirements.",
  },
  {
    icon: "⚡",
    title: "Rapid Deployment",
    description: "Quick implementation and deployment with minimal disruption to your business operations.",
  },
  {
    icon: "💰",
    title: "Cost Effective",
    description: "Competitive pricing with transparent costs and excellent return on investment.",
  },
  {
    icon: "🛡️",
    title: "Proven Security",
    description: "Advanced security measures and compliance with industry standards and regulations.",
  },
  {
    icon: "📞",
    title: "Dedicated Support",
    description: "Committed support team available 24/7 to ensure your systems run smoothly.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <span className={styles.badge}>WHY CHOOSE US</span>
            <h2 className={styles.title}>
              Your Success is Our
              <span className={styles.highlight}> Priority</span>
            </h2>
            <p className={styles.description}>
              We combine technical expertise with business acumen to deliver solutions that not only meet your current
              needs but also prepare you for future challenges and opportunities.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight_item}>
                <span className={styles.checkIcon}>✅</span>
                <span>Certified IT Professionals</span>
              </div>
              <div className={styles.highlight_item}>
                <span className={styles.checkIcon}>✅</span>
                <span>ISO 27001 Certified</span>
              </div>
              <div className={styles.highlight_item}>
                <span className={styles.checkIcon}>✅</span>
                <span>99.9% Uptime Guarantee</span>
              </div>
            </div>
            <button className={styles.ctaButton}>
              Learn More About Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.reasonsGrid}>
              {reasons.map((reason, index) => (
                <div key={index} className={styles.reasonCard}>
                  <div className={styles.reasonIcon}>{reason.icon}</div>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                  <p className={styles.reasonDescription}>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
