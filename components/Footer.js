import Link from "next/link";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>
          <span className={styles.link}>Les jardins de Ben 32</span>
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
