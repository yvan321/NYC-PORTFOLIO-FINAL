import { useEffect } from "react";
import styles from './ProjectsStyles.module.css';
import zenstore from '../../assets/zen-store.png';
import alumnitracking from '../../assets/alumni-tracking.png';
import hiltonhotel from '../../assets/hilton-hotel.png';
import ivanjbakery from '../../assets/ivanj-bakery.png';
import quintech from '../../assets/quintech.png';
import michiel from '../../assets/michiel.png';
import cvsuwebsite from '../../assets/cvsuwebsite.png';
import ProjectCard from '../../common/ProjectCard';
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true, 
      offset: 100, 
    });
  }, []);

  return (
    <section id="project" className={styles.container}>
      <h1 data-aos="fade-up" className={styles.sectionTitle}>Projects</h1>
      <div data-aos="fade-up" className={styles.projectsContainer}>
        <div className={styles.projectWrapper}>
          <ProjectCard
            src={zenstore}
            h3="Zen Store"
            description="Inventory Management System"
            status="Not Yet Live"
          />
          <div className={`${styles.statusLabel} ${styles.notYetLive}`}>
            Not Yet Live
          </div>
        </div>
        <div className={styles.projectWrapper}>
          <ProjectCard
            src={alumnitracking}
            h3="AlumTracking"
            description="Alumni Tracking System"
            status="Not Yet Live"
          />
          <div className={`${styles.statusLabel} ${styles.notYetLive}`}>
            Not Yet Live
          </div>
        </div>
        <div className={styles.projectWrapper}>
          <ProjectCard
            src={hiltonhotel}
            h3="Hilton Hotel"
            description="Hotel Reservation System"
            status="Not Yet Live"
          />
          <div className={`${styles.statusLabel} ${styles.notYetLive}`}>
            Not Yet Live
          </div>
        </div>
        <div className={styles.projectWrapper}>
          <ProjectCard
            src={ivanjbakery}
            h3="IvanJ Bakery"
            description="Inventory Management System"
            status="Not Yet Live"
          />
          <div className={`${styles.statusLabel} ${styles.notYetLive}`}>
            Not Yet Live
          </div>
        </div>
        <div className={styles.projectWrapper}>
          <ProjectCard
            src={quintech}
            link="https://lelelss.github.io/QuinTechDV/?fbclid=IwZXh0bgNhZW0CMTEAAR3_g7OLVu3wbqkskiOfU_hvjjpgxfyPX8wXJpfV9Lojd9DT8KJ7V4EkLps_aem_cJTmqBbVSwjP8l2kQTlarg"
            h3="Quintech"
            description="IT Company Website"
            status="Live"
          />
          <div className={`${styles.statusLabel} ${styles.live}`}>
            Live
          </div>
        </div>
        <div className={styles.projectWrapper}>
          <ProjectCard
            src={michiel}
            h3="Michiel Beauty"
            description="Inventory Management System"
            status="Not Yet Live"
          />
          <div className={`${styles.statusLabel} ${styles.notYetLive}`}>
            Not Yet Live
          </div>
        </div>
        <div className={styles.projectWrapper}>
          <ProjectCard
            src={cvsuwebsite}
            link="https://lelelss.github.io/CVSU-WEBSITE/index.html"
            h3="CvSU Website"
            description="School Website"
            status="Live"
          />
          <div className={`${styles.statusLabel} ${styles.live}`}>
            Live
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
