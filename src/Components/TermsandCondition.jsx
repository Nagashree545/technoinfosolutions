import React from "react";
import styles from "../Styles/Termsandcondition.module.css";

export default function TermsAndConditions() {
  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <div className={styles.gradientBg}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.subtitle}>
            Please read these Terms and Conditions carefully before using our
            products or services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <section className={styles.sectionCard}>
          <h2>Products and Services</h2>
          <p>
            We offer the sale of computer accessories and refurbished laptops,
            along with technical support, repair, maintenance, and installation
            services. All products are subject to availability.
          </p>
        </section>

        {/* ✅ New Section for Desktop, Laptop & Printer Services */}
        <section className={styles.sectionCard}>
          <h2>Desktop, Laptop, Printer & Spares Sales and Services</h2>
          <ul className={styles.customList}>
            <li>(a) PC Upgrade</li>
            <li>(b) Hard Disk Recovery</li>
            <li>(c) Virus & Spyware Removal</li>
            <li>(d) Home and Office Networking</li>
            <li>(e) Operating System Install</li>
            <li>(f) Broken Laptop Repair / Refurbished Laptop Sales</li>
          </ul>
        </section>

        <section className={styles.sectionCard}>
          <h2>Pricing and Payments</h2>
          <p>
            All prices are listed and subject to change without prior notice.
            Full payment must be received before any product is delivered or
            service is rendered. We accept payments both online and offline.
          </p>
        </section>

        <section className={styles.sectionCard}>
          <h2>Warranty</h2>
          <ul className={styles.customList}>
            <li>
              Refurbished laptops may come with a limited warranty from us,
              typically 90 days, unless otherwise stated.
            </li>
            <li>
              Service-related warranties, if any, will be specified in writing.
            </li>
          </ul>
        </section>

        {/* ✅ Service Terms & Related Sections */}
        <section className={styles.sectionCard}>
          <h2>Service Terms</h2>
          <p>
            We will perform all services in a professional manner. Customers
            must provide accurate information and back up important data before
            service. The Company is not responsible for data loss or corruption.
          </p>
        </section>

        <section className={styles.sectionCard}>
          <h2>Limitation of Liability</h2>
          <p>
            We are not liable for any indirect, incidental, or consequential
            damages arising from the use of our products or services. Our
            maximum liability is limited to the amount paid for the product or
            service.
          </p>
        </section>

        <section className={styles.sectionCard}>
          <h2>Customer Responsibilities</h2>
          <ul className={styles.customList}>
            <li>You agree not to misuse the equipment or violate any laws.</li>
            <li>You are responsible for maintaining software licenses.</li>
            <li>You must ensure proper device and data security.</li>
          </ul>
        </section>

        <section className={styles.sectionCard}>
          <h2>Intellectual Property</h2>
          <p>
            All content, logos, and materials provided by the Company remain our{" "}
            <b>intellectual property</b>. They may not be copied, modified, or
            distributed without prior written permission.
          </p>
        </section>

        {/* Contact Section */}
        <div className={styles.contactBox}>
          <h3>Need Assistance?</h3>
          <p>
            If you have any questions regarding these Terms & Conditions, feel
            free to reach out to our support team.
          </p>
          <button className={styles.contactBtn}>
            <a style={{ textDecoration: "none" }}>Contact Support</a>
          </button>
        </div>
      </div>
    </div>
  );
}
