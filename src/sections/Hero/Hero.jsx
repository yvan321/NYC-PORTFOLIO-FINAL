import { useEffect, useRef, useState } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/PROFNEIL1.svg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import arrowUpLight from '../../assets/arrowup-light.png';
import arrowUpDark from '../../assets/arrowup-dark.png';
import facebookLight from '../../assets/facebook-light.png';
import facebookDark from '../../assets/facebook-dark.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV-NEIL-YVAN.pdf';
import nyclogodark from '../../assets/nyclogolight.png';
import nyclogolight from '../../assets/nyclogodark.png';
import { useTheme } from '../../common/ThemeContext';
import { FaBars } from 'react-icons/fa';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const facebookIcon = theme === 'light' ? facebookLight : facebookDark;
  const logoICon = theme === 'light' ? nyclogolight : nyclogodark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const arrowUpIcon = theme === 'light' ? arrowUpLight : arrowUpDark;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false); 
  const words = ['Web Developer', 'Designer', 'Graphic Artist', 'Programmer'];
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const sectionIds = ['#home', '#about', '#projects','#skills', '#education', '#contact'];

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.active); // Ensure `active` is in `HeroStyles.module.css`

  };
  

  useEffect(() => {
    const header = headerRef.current;
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (header) {
        header.style.top = scrollTop > lastScrollTop ? '0' : '0';
      }
      setShowBackToTop(scrollTop > 200);
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const navLinks = navRef.current.querySelectorAll('a');
    const observerOptions = { threshold: 0.7 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        const navLink = navRef.current.querySelector(`a[href="#${sectionId}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('active'));
          if (navLink) navLink.classList.add('active');
        }
      });
    }, observerOptions);

    sectionIds.forEach((sectionId) => {
      const section = document.querySelector(sectionId);
      if (section) observer.observe(section);
    });

    

    return () => {
      sectionIds.forEach((sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section>
        <header ref={headerRef} className={styles.header}>
  <a href="#home" className={`${styles.logo} logo`}>
    <img src={logoICon} alt="Logo" className={styles.logoImage} />
    NYC
  </a>

  <nav ref={navRef}>
  {sectionIds.map((id) => (
    <a key={id} href={id} onClick={showNavbar}>
      {id.replace('#', '').charAt(0).toUpperCase() + id.slice(2)}
    </a>
  ))}
</nav>


        <button className="nav-btn" onClick={showNavbar} aria-label="Open navigation">
          <FaBars />
        </button>
      </header>

      <div className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img src={heroImg} className={styles.hero} alt="Profile picture" />
        </div>

        <div className={styles.info}>
          <h1>
            NEIL &nbsp;YVAN
            <br />
            CALIWAN
          </h1>
          <h2 className={styles.typingtext}>
            <span>{words[currentWordIndex]}</span>
          </h2>
          <span>
            <a href="https://facebook.com/nycaliwan.03/" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook icon" />
            </a>
            <a href="https://github.com/yvan321" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/neil-yvan-237325175/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
          </span>
          <p className={styles.description}>
            Trust yourself, and you have already paved the way.
          </p>
          
          <a href={CV} download>
          <button className={styles.mybtn}
          >Download CV</button>

          </a>
        </div>
      </div>

      <div className={styles.colorModeee} onClick={toggleTheme}>
        <img
          className={styles.colorModeProp}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>

      {showBackToTop && (
        <button className={styles.backToTop} onClick={scrollToTop}>
          <img src={arrowUpIcon} alt="Back to top icon" />
        </button>
      )}
    </section>
  );
}

export default Hero;
