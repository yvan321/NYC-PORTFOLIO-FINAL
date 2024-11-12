import styles from './FooterStyles.module.css';


function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; NEIL YVAN CALIWAN. <br />
        All rights reserved. 2024
        <br />
      </p>
    </section>
  );
}

export default Footer;
