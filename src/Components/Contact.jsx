
import React, { useState } from "react";
import styles from "../Styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
    setSubmitError("");
  };

  if (isSubmitted) {
    return (
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✅</div>
            <h3 className={styles.successTitle}>Message Sent!</h3>
            <p className={styles.successMessage}>
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <button onClick={resetForm} className={styles.submitButton}>
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Ready to transform your business with our IT solutions? Contact us today!
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div>
                <h3>Email</h3>
                <p>technoinfolinesolutions@gmail.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <h3>Phone</h3>
                <p>+91 8217399673</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h3>Address</h3>
                <p>banglore</p>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`${styles.input} ${errors.name ? styles.error : ""}`}
              />
              {errors.name && <div className={styles.errorMessage}>⚠️ {errors.name}</div>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className={`${styles.input} ${errors.email ? styles.error : ""}`}
              />
              {errors.email && <div className={styles.errorMessage}>⚠️ {errors.email}</div>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What is this about?"
                className={`${styles.input} ${errors.subject ? styles.error : ""}`}
              />
              {errors.subject && <div className={styles.errorMessage}>⚠️ {errors.subject}</div>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Your Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your project or inquiry..."
                rows={5}
                className={`${styles.textarea} ${errors.message ? styles.error : ""}`}
              ></textarea>
              {errors.message && <div className={styles.errorMessage}>⚠️ {errors.message}</div>}
            </div>

            {submitError && <div className={styles.submitError}>⚠️ {submitError}</div>}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? <><div className={styles.spinner}></div> Sending...</> : "📤 Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
