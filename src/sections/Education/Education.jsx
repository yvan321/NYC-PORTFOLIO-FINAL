import  { useEffect } from "react";
import styles from './EducationStyles.module.css';
import EducationCard from '../../common/EducationCard';
import educcvsu from '../../assets/educcvsu.svg';
import eduama from '../../assets/eduama.svg';
import educganhs from '../../assets/educganhs.svg';
import AOS from "aos";
import "aos/dist/aos.css";



function Education() {
  
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation only happens once
      offset: 100, // Distance to trigger animation
    });
  }, []);
    return (
        <section id="projects" className={styles.container}>
          <h1 data-aos="fade-up" className={styles.sectionTitle}>Education</h1>
          <div data-aos="fade-up" className={styles.projectsContainer}>
            <EducationCard
              src={educcvsu}
              h2="Cavite State University"
              h3="Bacoor Campus"
              p="2022-Present"
            />
             <EducationCard
              src={eduama}
              h2="AMA Computer College"
              h3="Las Piñas"
              p="2020-2022"
            />
            <EducationCard
              src={educganhs}
              h2="Golden Acres National HS"
              h3="Las Piñas"
              p="2015-2019"
            />
            
          </div>
        </section>
      );
    }
    
export default Education;