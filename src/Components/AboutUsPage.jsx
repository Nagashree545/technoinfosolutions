import styles from "../Styles/AboutUSPage.module.css"
import Footer from "./Footer"
import WhyChooseUs from "./WhyChooseUs"

const AboutUsPAge = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Header Section */}
      {/* <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.badge}>⚡ ABOUT TECHNO INFOLINE SOLUTIONS</div>
          <h1 className={styles.mainTitle}>Pioneering Digital Excellence Since 2015</h1>
          <p className={styles.subtitle}>
            We are a leading technology solutions provider dedicated to transforming businesses through innovative IT
            infrastructure, cybersecurity, and digital transformation services.
          </p>
        </div>
      </header> */}
       <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.floatingElements}>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.heroLabel}>About Techno Infoline Solutions</span>
              <h1 className={styles.heroTitle}>
                Crafting Digital
                <span className={styles.gradientText}> Excellence</span>
                <br />
                Since 2015
              </h1>
              <p className={styles.heroDescription}>
                We're not just another tech company. We're digital architects, security guardians, and innovation
                catalysts, transforming businesses through cutting-edge technology solutions.
              </p>
              {/* <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statText}>Happy Clients</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.statNumber}>99.9%</span>
                  <span className={styles.statText}>Uptime</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statText}>Support</span>
                </div>
              </div> */}
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.techGrid}>
                <div className={styles.techCard}>
                  <div className={styles.techIcon}>🔒</div>
                  <span>Security</span>
                </div>
                <div className={styles.techCard}>
                  <div className={styles.techIcon}>☁️</div>
                  <span>Cloud</span>
                </div>
                <div className={styles.techCard}>
                  <div className={styles.techIcon}>⚡</div>
                  <span>Performance</span>
                </div>
                <div className={styles.techCard}>
                  <div className={styles.techIcon}>🚀</div>
                  <span>Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Company Overview */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.text}>
                Founded in 2015, Techno Infoline Solutions emerged from a vision to bridge the gap between complex
                technology and business success. What started as a small team of passionate technologists has grown into
                a trusted partner for over 500 companies worldwide.
              </p>
              <p className={styles.text}>
                Our journey has been marked by continuous innovation, unwavering commitment to excellence, and a deep
                understanding of our clients' evolving needs in the digital landscape.
              </p>
            </div>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Companies Served</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>8+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>99.9%</div>
                <div className={styles.statLabel}>Uptime Guarantee</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.container}>
          <div className={styles.mvGrid}>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>🎯</div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardText}>
                To empower businesses with cutting-edge technology solutions that drive growth, enhance security, and
                optimize operations. We are committed to delivering exceptional value through innovative IT
                infrastructure, robust cybersecurity, and seamless cloud integration services.
              </p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.cardIcon}>🚀</div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardText}>
                To be the global leader in digital transformation, setting new standards for technology excellence and
                innovation. We envision a future where every business, regardless of size, has access to
                enterprise-grade IT solutions that propel them toward unprecedented success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🔒</div>
              <h4 className={styles.valueTitle}>Security First</h4>
              <p className={styles.valueText}>
                We prioritize cybersecurity in every solution, ensuring your data and systems remain protected against
                evolving threats.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h4 className={styles.valueTitle}>Innovation</h4>
              <p className={styles.valueText}>
                We continuously embrace emerging technologies to deliver cutting-edge solutions that keep you ahead of
                the competition.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h4 className={styles.valueTitle}>Partnership</h4>
              <p className={styles.valueText}>
                We build long-term relationships with our clients, acting as trusted advisors in their digital
                transformation journey.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h4 className={styles.valueTitle}>Excellence</h4>
              <p className={styles.valueText}>
                We maintain the highest standards in service delivery, ensuring exceptional quality in every project we
                undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
<WhyChooseUs/>
      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Leadership Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img src="/placeholder.svg?height=200&width=200" alt="CEO" />
              </div>
              <h4 className={styles.teamName}>John Anderson</h4>
              <p className={styles.teamRole}>Chief Executive Officer</p>
              <p className={styles.teamBio}>
                15+ years in enterprise technology solutions with expertise in digital transformation.
              </p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img src="/placeholder.svg?height=200&width=200" alt="CTO" />
              </div>
              <h4 className={styles.teamName}>Sarah Chen</h4>
              <p className={styles.teamRole}>Chief Technology Officer</p>
              <p className={styles.teamBio}>
                Cloud architecture specialist with 12+ years in cybersecurity and infrastructure.
              </p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img src="/placeholder.svg?height=200&width=200" alt="COO" />
              </div>
              <h4 className={styles.teamName}>Michael Rodriguez</h4>
              <p className={styles.teamRole}>Chief Operations Officer</p>
              <p className={styles.teamBio}>
                Operations excellence leader with proven track record in scaling tech companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
            <p className={styles.ctaText}>
              Join 500+ companies that trust Techno Infoline Solutions for their digital transformation needs.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Get Started</button>
              <button className={styles.secondaryBtn}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPAge
