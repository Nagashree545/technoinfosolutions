import React from "react";
import styles from "../Styles/Helpandsupport.module.css";

export default function HelpSupport() {
  return (
    <div className={styles.helpWrapper}>
      <h1 className={styles.title}>Help & Support</h1>
      <p className={styles.intro}>
        We’re here to help! Whether you need support with a refurbished laptop
        purchase, service booking, or have technical issues, our team is ready
        to assist you.
      </p>

   

      <div className={styles.supportSection}>
        <h2>🛠 Technical Support</h2>
        <p>
          Our technicians can diagnose and resolve hardware or software
          problems. On-site and remote support options available.
        </p>
      </div>

      <div className={styles.supportSection}>
        <h2>📝 Service Booking</h2>
        <p>
          To schedule a repair or maintenance service, call us or fill out our
          Service Request Form online.
        </p>
      </div>

      <div className={styles.supportSection}>
        <h2>🔧 Warranty & Repairs</h2>
        <p>
          Need help with warranty claims or repairs? Contact us with your invoice
          and serial number, and we’ll guide you through the process.
        </p>
      </div>

      <div className={styles.supportSection}>
        <h2>🚚 Order & Delivery Support</h2>
        <p>
          Questions about your order or delivery status? We’ll keep you updated
          and help track your order.
        </p>
      </div>

      <div className={styles.supportSection}>
        <h2>💾 Data Backup & Recovery</h2>
        <p>
          Worried about data loss? We offer secure data backup and recovery
          services to keep your information safe.
        </p>
      </div>

      <div className={styles.supportSection}>
        <h2>💻 Software Support</h2>
        <p>
          Need help installing or troubleshooting software? We provide setup,
          updates, and problem-solving for commonly used software.
        </p>
      </div>

      <div className={styles.supportSection}>
        <h2>❓ Quick Tips & FAQs</h2>
        <p>
          Check out our FAQ section for common questions and quick solutions:
          [Link to FAQ page]
        </p>
      </div>

      <div className={styles.supportSection}>
        <h2>🕘 Business Hours</h2>
        <p>Monday – Saturday: 10:00 AM – 8:00 PM</p>
        <p>Closed on Sundays and Public Holidays</p>
      </div>
    </div>
  );
}
