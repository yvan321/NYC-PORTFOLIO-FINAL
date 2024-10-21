import styles from './ProjectsStyles.module.css';
import zenstore from '../../assets/zen-store.png';
import alumnitracking from '../../assets/alumni-tracking.png';
import hiltonhotel from '../../assets/hilton-hotel.png';
import ivanjbakery from '../../assets/ivanj-bakery.png';
import quintech from '../../assets/quintech.png';
import michiel from '../../assets/michiel.png';
import cvsuwebsite from '../../assets/cvsuwebsite.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={zenstore}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Zen Store"
          p="Inventory Management System"
        />
        <ProjectCard
          src={alumnitracking}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="AlumTracking"
          p="Alumni Tracking System"
        />
        <ProjectCard
          src={hiltonhotel}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hilton Hotel"
          p="Hotel Reservation System"
        />
        <ProjectCard
          src={ivanjbakery}
          link="https://github.com/Ade-mir/company-landing-page-2"
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
          link="https://github.com/Ade-mir/company-landing-page-2"
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