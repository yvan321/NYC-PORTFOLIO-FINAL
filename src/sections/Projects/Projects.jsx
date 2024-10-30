import  { useEffect } from "react";
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
      duration: 1200, // Animation duration
      once: true, // Animation only happens once
      offset: 100, // Distance to trigger animation
    });
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h1 data-aos="fade-up" className={styles.sectionTitle}>Projects</h1>
      <div data-aos="fade-up" className={styles.projectsContainer}>
        <ProjectCard
          src={zenstore}
          h3="Zen Store"
          p="Inventory Management System"
        />
        <ProjectCard
          src={alumnitracking}
          h3="AlumTracking"
          p="Alumni Tracking System"
        />
        <ProjectCard
          src={hiltonhotel}
          h3="Hilton Hotel"
          p="Hotel Reservation System"
        />
        <ProjectCard
          src={ivanjbakery}
          h3="IvanJ Bakery"
          p="Inventory Management System"
        />
        <ProjectCard
          src={quintech}
          link="https://lelelss.github.io/QuinTechDV/?fbclid=IwZXh0bgNhZW0CMTEAAR3_g7OLVu3wbqkskiOfU_hvjjpgxfyPX8wXJpfV9Lojd9DT8KJ7V4EkLps_aem_cJTmqBbVSwjP8l2kQTlarg"
          h3="Quintech"
          p="IT Company Website"
        />
        <ProjectCard
          src={michiel}
          h3="Michiel Beauty"
          p="Inventory Management System"
        />
        <ProjectCard
          src={cvsuwebsite}
          link="https://lelelss.github.io/CVSU-WEBSITE/index.html"
          h3="CvSU Website"
          p="School Website"
        />
      </div>
    </section>
  );
}

export default Projects;