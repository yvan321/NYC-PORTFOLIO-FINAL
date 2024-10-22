import styles from './SkillsStyles.module.css';
import htmllogo from '../../assets/htmllogo.svg';
import csslogo from '../../assets/csslogo.svg';
import jslogo from '../../assets/jslogo.svg';
import reactlogo from '../../assets/reactlogo.svg';
import javalogo from '../../assets/javalogo.svg';
import pythonlogo from '../../assets/pythonlogo.svg';
import logologo from '../../assets/logologo.svg';
import weblogo from '../../assets/weblogo.svg';

import SkillList from '../../common/SkillList';


function Skills() {
  
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={htmllogo} skill="HTML" />
        <SkillList src={csslogo} skill="CSS" />
        <SkillList src={jslogo} skill="JavaScript" />
        <SkillList src={reactlogo} skill="React" />
        <SkillList src={javalogo} skill="Java" />
        <SkillList src={pythonlogo} skill="Python" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={logologo} skill="Logo Making" />
        <SkillList src={weblogo} skill="Web Designing" />
        
      </div>
    </section>
  );
}

export default Skills;