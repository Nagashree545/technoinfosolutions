import React, { useEffect } from "react";
import styles from "../Styles/Termsandcondition.module.css";

export default function TermsAndConditions() {
  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      document.getElementById("scrollIndicator").style.transform = `scaleX(${
        scrolled / 100
      })`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* Scroll Progress Indicator */}
      <div id="scrollIndicator" className={styles.scrollIndicator}></div>

      {/* Header Section */}
      <div className={styles.gradientBg}>
        <div className={styles.headerContent}>
          <h1 className={`${styles.title} ${styles.fadeInUp}`}>
            Terms and Conditions
          </h1>
          <p className={`${styles.subtitle} ${styles.fadeInUp}`}>
            Please read these terms carefully before using our services
          </p>
        
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        {/* Example Section */}
        <section className={`${styles.sectionCard} ${styles.fadeInUp}`}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.iconBox} ${styles.blueIcon}`}>💻</div>
            <h2>Products and Services</h2>
          </div>
          <p>
            We offer the sale of computer accessories and refurbished laptops,
            along with technical support, repair, maintenance, and installation
            services. All products are subject to availability.
          </p>
        </section>

        {/* Pricing and Payments */}
        <section className={`${styles.sectionCard} ${styles.fadeInUp}`}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.iconBox} ${styles.greenIcon}`}>💵</div>
            <h2>Pricing and Payments</h2>
          </div>
          <p>
            All prices are listed and are subject to change without notice. Full
            payment must be received before any product is delivered or service
            is rendered. We accept payments through Online / Offline modes.
          </p>
        </section>

        {/* Warranty */}
        <section className={`${styles.sectionCard} ${styles.fadeInUp}`}>
          <div className={styles.sectionHeader}>
            <div className={`${styles.iconBox} ${styles.purpleIcon}`}>🛡</div>
            <h2>Warranty</h2>
          </div>
          <ul className={styles.customList}>
            <li>
              Refurbished laptops may come with a limited warranty from us,
              typically 90 days, unless otherwise stated.
            </li>
            <li>Service-related warranties, if any, will be specified in writing.</li>
          </ul>
        </section>

        {/* ... Repeat for other sections (Return, Service Terms, Liability, etc.) ... */}

        {/* Contact Section */}
        <div className={`${styles.contactBox} ${styles.fadeInUp}`}>
          <h3>Questions about our Terms?</h3>
          <p>
            If you have any questions about these Terms and Conditions, please
            don't hesitate to contact us.
          </p>
          <button  className={styles.contactBtn} ><a href="/Contact">Contact Support</a></button>
        </div>
      </div>

     
    </div>
  );
}
