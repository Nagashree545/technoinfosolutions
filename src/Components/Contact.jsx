import styles from "../Styles/Contact.module.css"

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>Ready to transform your business with our IT solutions? Contact us today!</p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div>
                <h3>Email</h3>
                <p>info@technoinfoline.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <h3>Phone</h3>
                <p>+91 XXXXXXXXXX</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h3>Address</h3>
                <p>123 Tech Street, Digital City, TC 12345</p>
              </div>
            </div>
          </div>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Subject" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Your Message" rows={5} className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
