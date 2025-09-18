import React from "react";
import styles from "../Styles/Helpandsupport.module.css";

export default function HelpSupport() {
  const supportItems = [
    {
      icon: "🛠",
      title: "Technical Support",
      desc: "Get quick help for hardware or software issues with on-site or remote support.",
      color: "card1",
    },
    {
      icon: "📝",
      title: "Service Booking",
      desc: "Easily schedule repair or maintenance by phone or our online form.",
      color: "card2",
    },
    {
      icon: "🔧",
      title: "Warranty & Repairs",
      desc: "Guidance for warranty claims and repairs with invoice and serial number.",
      color: "card3",
    },
    {
      icon: "🚚",
      title: "Order & Delivery",
      desc: "Stay updated with your order and track deliveries in real-time.",
      color: "card4",
    },
    {
      icon: "💾",
      title: "Data Backup & Recovery",
      desc: "Protect important files with secure backup and recovery options.",
      color: "card5",
    },
    {
      icon: "💻",
      title: "Software Support",
      desc: "Setup, update, and troubleshoot software to keep you running smoothly.",
      color: "card6",
    },
  
 
  ];

  return (
    <div className={styles.helpWrapper}>
      <header className={styles.header}>
        <h1>Help & Support</h1>
        <p>
          We’re here to help you — from technical issues to service bookings,
          our team is always ready to assist.
        </p>
      </header>

      <div className={styles.grid}>
        {supportItems.map((item, index) => (
          <div key={index} className={`${styles.card} ${styles[item.color]}`}>
            <span className={styles.icon}>{item.icon}</span>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
