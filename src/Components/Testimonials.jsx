"use client"
import { useState } from "react"
import styles from "../Styles/Testimonials.module.css"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechCorp Inc.",
    company: "TechCorp Inc.",
    image: "👩‍💼",
    rating: 5,
    text: "Techno Infoline Solutions transformed our entire IT infrastructure. Their expertise in cloud migration and cybersecurity is unmatched. We've seen a 40% improvement in system performance.",
  },
  {
    name: "Michael Chen",
    position: "IT Director, Global Enterprises",
    company: "Global Enterprises",
    image: "👨‍💻",
    rating: 5,
    text: "Outstanding service and support! Their team handled our complex data management requirements with professionalism. The 24/7 support has been invaluable for our operations.",
  },
  {
    name: "Emily Rodriguez",
    position: "Operations Manager, StartupXYZ",
    company: "StartupXYZ",
    image: "👩‍💻",
    rating: 5,
    text: "As a growing startup, we needed scalable solutions. Techno Infoline delivered exactly what we needed within budget and timeline. Their refurbished hardware saved us thousands.",
  },
]

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>TESTIMONIALS</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <span key={i} className={styles.star}>
                  ⭐
                </span>
              ))}
            </div>
            <blockquote className={styles.quote}>"{testimonials[activeTestimonial].text}"</blockquote>
            <div className={styles.author}>
              <div className={styles.authorImage}>{testimonials[activeTestimonial].image}</div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{testimonials[activeTestimonial].name}</div>
                <div className={styles.authorPosition}>{testimonials[activeTestimonial].position}</div>
                <div className={styles.authorCompany}>{testimonials[activeTestimonial].company}</div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialNav}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.navDot} ${index === activeTestimonial ? styles.active : ""}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.clientLogos}>
          <div className={styles.logoGrid}>
            <div className={styles.clientLogo}>🏢 TechCorp</div>
            <div className={styles.clientLogo}>🏭 Global Ent.</div>
            <div className={styles.clientLogo}>🚀 StartupXYZ</div>
            <div className={styles.clientLogo}>🏪 RetailPro</div>
            <div className={styles.clientLogo}>🏥 HealthTech</div>
            <div className={styles.clientLogo}>🎓 EduSoft</div>
          </div>
        </div>
      </div>
    </section>
  )
}
