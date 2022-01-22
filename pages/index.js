import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Carroussel } from "../components/Carroussel";
import { Presentation } from "../components/Presentation";
import styles from "../styles/Home.module.scss";
import realisationJson from "../realisations.json";
import { FaAngleUp } from "react-icons";

export const Home = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [CarrousselIsOpen, setCarrousselIsOpen] = useState(false);

  const handleBurgerMenu = () => {
    if (menuIsOpen) {
      console.log("jouvre le menu");
      setMenuIsOpen(false);
    } else {
      console.log("je ferme le menu");
      setMenuIsOpen(true);
    }
  };

  const handleCarroussel = (name) => {
    console.log("je lance le carroussel");
    setCarrousselIsOpen(true);
  };
  const closeCarroussel = () => {
    setCarrousselIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Les jardins de Ben</title>
        <meta
          name="description"
          content="Les jardins de Ben (32) vous propose les services de Ben, artisan paysagiste depuis 2020"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header className={styles.header} id="accueil" />
      <main className={styles.main}>
        <section id="ben" className={styles.ben}>
          <Presentation className={styles.presentation} />
        </section>
        <section id="mesrealisations">
          <div className={styles.grid}>
            <h2 className={styles.h2}>Mes réalisations</h2>
            {CarrousselIsOpen && (
              <div className={styles.carousel}>
                <div className={styles.backward}>
                  <Image
                    src="/27323.svg"
                    alt="image précédente"
                    className={styles.images}
                    width={120}
                    height={80}
                  />
                </div>
                <div key="key" className="">
                  {realisationJson.map((image, index) => {
                    return (
                      <Image
                        name={image.description}
                        key={image.key}
                        src={image.image}
                        alt="image précédente"
                        className={styles.images}
                        width={120}
                        height={80}
                      />
                    );
                  })}
                </div>
                <div className={styles.forward}>
                  <Image
                    src="/27324.svg"
                    alt="image suivante"
                    className={styles.images}
                    width={120}
                    height={80}
                  />
                </div>
                <div
                  className={styles.close_carroussel}
                  onClick={closeCarroussel}
                >
                  <Image
                    src="/32px-Black_close_x.svg"
                    width="30"
                    height="30"
                    alt="close_button"
                  />
                </div>
              </div>
            )}
            <ul className={styles.ul}>
              {realisationJson.map((elem) => (
                <li className={styles.elem} key={elem.key}>
                  <article className={styles.card}>
                    <Image
                      onClick={handleCarroussel}
                      key={elem.key}
                      src={elem.image}
                      alt={elem.image}
                      className={styles.images}
                      width={1920}
                      height={1280}
                    />
                    <p className={styles.img_description}>{elem.description}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="mespartenaires">
          <title>
            <h2>Mes partenaires</h2>
          </title>
        </section>
        <section>
          <title>
            <h2>Contact</h2>
          </title>
        </section>
      </main>
      <div className={styles.scrollUp}>
        <Link href="/">
          <a>
            <Image
              src="/angle-up-svgrepo-com.svg"
              width={40}
              height={40}
              alt="FaAngleUp"
              className={styles.scrollUp_svg}
            />
          </a>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
