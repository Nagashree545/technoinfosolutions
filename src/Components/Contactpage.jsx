import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Award,
} from "lucide-react";
import styles from "../Styles/ContactPage.module.css";
import Contact from "./Contact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const result = await emailjs.send(
        "service_eg91ojn", // 🔹 Replace with EmailJS Service ID
        "template_clvkseo", // 🔹 Replace with EmailJS Template ID
        formData,
        "REIWarDRbm2Us2r-3" // 🔹 Replace with EmailJS Public Key
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Background Decorations */}
      <div className={styles.backgroundDecorations}>
        <div className={`${styles.decoration} ${styles.decorationTopRight}`}></div>
        <div className={`${styles.decoration} ${styles.decorationBottomLeft}`}></div>
        <div className={`${styles.decoration} ${styles.decorationCenter}`}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.maxWidth}>
          {/* Hero Section */}
          <div className={styles.heroSection}>
            <h1 className={styles.heroTitle}>
              Let's Build Something
              <span className={styles.heroTitleAccent}> Amazing Together</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Ready to transform your business with cutting-edge technology?
              Let's discuss your project and explore how we can help you achieve
              your goals.
            </p>
          </div>

          {/* Stats Section */}
          <div className={styles.statsSection}>
            <div className={styles.statItem}>
              <div className={`${styles.statIcon} ${styles.statIconBlue}`}>
                <Clock className={styles.icon} />
              </div>
              <h3 className={styles.statNumber}>24 Hours</h3>
              <p className={styles.statLabel}>Average response time</p>
            </div>
            <div className={styles.statItem}>
              <div className={`${styles.statIcon} ${styles.statIconGreen}`}>
                <Users className={styles.icon} />
              </div>
              <h3 className={styles.statNumber}>500+</h3>
              <p className={styles.statLabel}>Happy clients worldwide</p>
            </div>
            <div className={styles.statItem}>
              <div className={`${styles.statIcon} ${styles.statIconOrange}`}>
                <Award className={styles.icon} />
              </div>
              <h3 className={styles.statNumber}>99.9%</h3>
              <p className={styles.statLabel}>Client satisfaction rate</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
            </button>

            {submitStatus === "success" && (
              <p className={styles.success}>
                <CheckCircle size={16} /> Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className={styles.error}>
                <AlertCircle size={16} /> Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* Optional extra section */}
          <Contact />
        </div>
      </div>
    </div>
  );
}
