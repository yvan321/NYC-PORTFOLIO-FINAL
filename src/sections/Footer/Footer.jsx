import styles from './FooterStyles.module.css';


function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; KUPAL. <br />
        All rights reserved. 2024
      </p>
    </section>
  );
}

export default Footer;
