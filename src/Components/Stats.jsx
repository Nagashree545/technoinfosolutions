import { useState, useEffect, useRef } from "react"
import styles from "../Styles/Stats.module.css"

const stats = [
  { number: 500, suffix: "+", label: "Happy Clients", icon: "👥" },
  { number: 1000, suffix: "+", label: "Projects Completed", icon: "🚀" },
  { number: 99, suffix: "%", label: "Success Rate", icon: "📈" },
  { number: 24, suffix: "/7", label: "Support Available", icon: "🛠️" },
]

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState(stats.map(() => 0))
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [isVisible])

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.number / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.number) {
          current = stat.number
          clearInterval(timer)
        }
        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(current)
          return newCounters
        })
      }, 20)
    })
  }

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>
                {counters[index]}
                {stat.suffix}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
