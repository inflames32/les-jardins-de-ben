import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.scss";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleBurgerMenu = () => {
    if (menuIsOpen) {
      console.log("ici");
      return setMenuIsOpen(false);
    } else {
      console.log("là");
      return setMenuIsOpen(true);
    }
  };
  return (
    <div className={styles.header}>
      <div className={styles.headerBody}>
        <div className={styles.headerLogo}>
          <Image
            src="/logo.svg"
            alt="image 2"
            className={styles.logo}
            width={120}
            height={40}
          />
        </div>
        {menuIsOpen && (
          <nav className={styles.nav_mobile}>
            <div className={styles.burger_close} onClick={handleBurgerMenu}>
              <Image
                src="/32px-Black_close_x.svg"
                width="40"
                height="40"
                alt="close_button"
              />
            </div>
            <ul className={styles.ul_mobile}>
              <li>
                <a href="#ben">Ben</a>
              </li>
              <li>
                <a href="#mesrealisations">Mes réalisations</a>
              </li>
              <li>
                <a href="#mespartenaires">Mes partenaires</a>
              </li>
            </ul>
          </nav>
        )}
        <nav className={styles.nav_notmobile}>
          <a href="#ben">Ben</a>
          <a href="#mesrealisations">Mes réalisations</a>
          <a href="#mespartenaires">Mes partenaires</a>
        </nav>
        {
          !menuIsOpen && (
            <div className={styles.burger_open} onClick={handleBurgerMenu}>
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
            </div>
          ) /* : (
          <div className={styles.burger_close} onClick={handleBurgerMenu}>
            <Image
              src="/32px-Black_close_x.svg"
              width="40"
              height="40"
              alt="close_button"
            />
          </div>
        ) */
        }
      </div>
    </div>
  );
};

export default Header;
