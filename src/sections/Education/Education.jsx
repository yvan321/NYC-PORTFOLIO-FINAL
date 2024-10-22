import styles from './EducationStyles.module.css';
import EducationCard from '../../common/EducationCard';

import educcvsu from '../../assets/educcvsu.svg';
import eduama from '../../assets/eduama.svg';
import educganhs from '../../assets/educganhs.svg';




function Education() {
  
    return (
        <section id="projects" className={styles.container}>
          <h1 className="sectionTitle">Education</h1>
          <div className={styles.projectsContainer}>
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