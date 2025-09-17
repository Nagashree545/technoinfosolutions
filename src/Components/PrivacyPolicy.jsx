import React from "react";
import styles from "../Styles/PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <div className={styles.gradientBg}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            We value your trust. This Privacy Policy explains how we handle your
            personal information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        {/* Data Collection */}
        <section className={styles.sectionCard}>
          <h2>Information We Collect</h2>
          <ul className={styles.customList}>
            <li>
              <b>Personal Information:</b> Name, email, phone number, billing
              and shipping address.
            </li>
            <li>
              <b>Device Information:</b> IP address, browser type, operating
              system, and usage statistics.
            </li>
            <li>
              <b>Transaction Data:</b> Payment details, purchase history, and
              service bookings.
            </li>
          </ul>
        </section>

        {/* Use of Data */}
        <section className={styles.sectionCard}>
          <h2>How We Use Your Data</h2>
          <ul className={styles.customList}>
            <li>To process your orders and deliver products/services.</li>
            <li>To provide technical support and customer service.</li>
            <li>
              To send important updates, invoices, or warranty information.
            </li>
            <li>
              To improve our website performance, user experience, and services.
            </li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className={styles.sectionCard}>
          <h2>Data Sharing & Disclosure</h2>
          <p>
            We respect your privacy. <b>We do not sell or rent your data</b> to
            third parties. Information may only be shared with:
          </p>
          <ul className={styles.customList}>
            <li>
              <b>Service Providers:</b> Payment gateways, shipping companies, or
              IT support teams that help us deliver services.
            </li>
            <li>
              <b>Legal Requirements:</b> If required by law, court order, or
              government request.
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className={styles.sectionCard}>
          <h2>Data Security</h2>
          <p>
            We use <b>encryption, firewalls, and secure servers</b> to protect
            your data from unauthorized access, alteration, or disclosure. While
            we follow industry best practices, no method of electronic storage
            is 100% secure.
          </p>
        </section>

        {/* Your Rights */}
        <section className={styles.sectionCard}>
          <h2>Your Rights</h2>
          <ul className={styles.customList}>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request corrections or updates to your personal information.</li>
            <li>
              Request deletion of your data (subject to legal obligations).
            </li>
            <li>Opt-out of marketing communications at any time.</li>
          </ul>
        </section>

        {/* Contact */}
        <div className={styles.contactBox}>
          <h3>Have Questions About Privacy?</h3>
          <p>
            If you have concerns about how we handle your personal information,
            please contact our support team.
          </p>
          <button className={styles.contactBtn}><a href="/Contact" style={{textDecoration:"none"}}>Contact Support</a></button>
        </div>
      </div>
    </div>
  );
}
