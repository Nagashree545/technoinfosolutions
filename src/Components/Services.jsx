import styles from "../Styles/Services.module.css"

const services = [
  {
    icon: "🗄️",
    title: "Data Management",
    description:
      "Comprehensive data storage, backup, and recovery solutions to keep your business information secure and accessible.",
  },
  {
    icon: "🔒",
    title: "Cyber Security",
    description: "Advanced security measures to protect your business from cyber threats and ensure data integrity.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
  },
  {
    icon: "💻",
    title: "Refurbished Laptops & Desktop",
    description: "High-quality refurbished computers that deliver excellent performance at affordable prices.",
  },
  {
    icon: "🛒",
    title: "Sales and Services",
    description: "Complete sales support and after-sales services for all your technology needs.",
  },
  {
    icon: "🔧",
    title: "Hardware Repair",
    description: "Expert hardware repair services to keep your devices running smoothly and efficiently.",
  },
  {
    icon: "💡",
    title: "IT Consulting Support",
    description: "Strategic IT consulting to help you make informed technology decisions for your business.",
  },
  {
    icon: "⚙️",
    title: "System Integration",
    description: "Seamless integration of various systems and technologies to optimize your workflow.",
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>Comprehensive IT solutions tailored to meet your business needs</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
