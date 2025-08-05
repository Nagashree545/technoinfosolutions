import styles from "../Styles/NewSection.module.css"

const news = [
  {
    category: "Technology",
    title: "The Future of Cloud Computing in 2024",
    excerpt: "Discover the latest trends and innovations shaping the cloud computing landscape this year.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "☁️",
  },
  {
    category: "Security",
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Essential security measures every small business should implement to protect their digital assets.",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    image: "🔒",
  },
  {
    category: "Innovation",
    title: "AI Integration in Business Operations",
    excerpt: "How artificial intelligence is revolutionizing business processes and improving efficiency.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "🤖",
  },
]

export default function NewsSection() {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>LATEST NEWS</span>
          <h2 className={styles.title}>Stay Updated with Tech Trends</h2>
          <p className={styles.subtitle}>
            Get insights from our experts on the latest technology trends and industry developments.
          </p>
        </div>

        <div className={styles.newsGrid}>
          {news.map((article, index) => (
            <article key={index} className={styles.newsCard}>
              <div className={styles.newsImage}>
                <span className={styles.newsIcon}>{article.image}</span>
                <div className={styles.category}>{article.category}</div>
              </div>
              <div className={styles.newsContent}>
                <h3 className={styles.newsTitle}>{article.title}</h3>
                <p className={styles.newsExcerpt}>{article.excerpt}</p>
                <div className={styles.newsMeta}>
                  <span className={styles.date}>{article.date}</span>
                  <span className={styles.readTime}>{article.readTime}</span>
                </div>
                <button className={styles.readMore}>
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.viewAll}>
          <button className={styles.viewAllButton}>
            View All Articles
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
