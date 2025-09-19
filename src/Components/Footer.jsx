import styles from "../Styles/Footer.module.css";
import logo from "../Assets/technoinfologo.png";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <img src={logo} />{" "}
              </div>
            </div>
            <p className={styles.brandDescription}>
              Your trusted partner for comprehensive IT solutions and business
              transformation.
            </p>
          </div>

          <div className={styles.links}>
            {/* <div className={styles.linkGroup}>
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#services">Data Management</a>
                </li>
                <li>
                  <a href="#services">Cyber Security</a>
                </li>
                <li>
                  <a href="#services">Cloud Solutions</a>
                </li>
                <li>
                  <a href="#services">Hardware Repair</a>
                </li>
              </ul>
            </div> */}

            <div className={styles.linkGroup}>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/Contact">Contact</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="/support">Help Center</a>
                </li>
                <li>
                  <a href="/refudnpolicy">Refund Policy</a>
                </li>
                <li>
                  <a href="/privacypolicy">Privacy Policy</a>
                </li>

                <li>
                  <a href="/terms">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2024 Techno Infoline Solutions. All rights reserved.</p>
      
        </div>
      </div>
    </footer>
  );
}
