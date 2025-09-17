import React from "react";
import styles from "../Styles/RefundPolicy.module.css";

export default function ReturnRefundPolicy() {
  return (
    <div className={styles.pageWrapper}>
      {/* Header Section */}
      <div className={styles.gradientBg}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Return & Refund Policy</h1>
          <p className={styles.subtitle}>
            Clear guidelines for returns, exchanges, and refunds of laptops and
            services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.container}>
        {/* Return Eligibility */}
        <section className={styles.sectionCard}>
          <h2>Return Eligibility</h2>
          <ul className={styles.customList}>
            <li>
              Returns for refurbished laptops are accepted within <b>7–14 days</b> of
              purchase.
            </li>
            <li>
              Products must be returned in their <b>original condition</b>, with all
              packaging, accessories, and proof of purchase.
            </li>
            <li>
              Products showing physical damage, misuse, or missing components are{" "}
              <b>not eligible</b> for returns.
            </li>
          </ul>
        </section>

        {/* Restocking Fee */}
        <section className={styles.sectionCard}>
          <h2>Restocking Fee</h2>
          <p>
            A <b>restocking fee of 10–15%</b> of the product price may apply to all
            returns, unless the return is due to a product defect covered under
            warranty.
          </p>
        </section>

        {/* Non-Returnable Items */}
        <section className={styles.sectionCard}>
          <h2>Non-Returnable Items</h2>
          <ul className={styles.customList}>
            <li>Installed software, licenses, and activation keys</li>
            <li>Repair or maintenance services already performed</li>
            <li>Customized or special-order laptops</li>
            <li>Data recovery and virus removal services</li>
          </ul>
        </section>

        {/* Refund Process */}
        <section className={styles.sectionCard}>
          <h2>Refund Process</h2>
          <ol className={styles.numberedList}>
            <li>
              Once your return is received and inspected, we will notify you via
              email or phone about the status of your refund.
            </li>
            <li>
              Approved refunds will be issued to the <b>original payment method</b>{" "}
              within <b>7–10 business days</b>.
            </li>
            <li>
              Shipping or handling charges are <b>non-refundable</b>.
            </li>
          </ol>
        </section>

        {/* Exchanges */}
        <section className={styles.sectionCard}>
          <h2>Exchanges</h2>
          <p>
            Defective laptops covered under warranty may be eligible for{" "}
            <b>replacement or repair</b>, depending on availability. Contact our
            support team to initiate an exchange.
          </p>
        </section>

        {/* Support Contact */}
        <div className={styles.contactBox}>
          <h3>Need Help with Returns?</h3>
          <p>
            Reach out to our support team for guidance on return requests,
            refunds, or warranty claims.
          </p>
          <button className={styles.contactBtn}><a style={{textDecoration:"none"}} href="Contact">Contact Support</a></button>
        </div>
      </div>
    </div>
  );
}
