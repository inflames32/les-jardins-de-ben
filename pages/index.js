import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Presentation } from "../components/Presentation";
import styles from "../styles/Home.module.scss";
import realisationJson from "../realisations.json";

export const Home = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleBurgerMenu = () => {
    if (menuIsOpen) {
      console.log("jouvre le menu");
      setMenuIsOpen(false);
    } else {
      console.log("je ferme le menu");
      setMenuIsOpen(true);
    }
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
            <ul className={styles.ul}>
              {realisationJson.map((elem, key) => (
                <li className={styles.elem} key={elem.description}>
                  <article className={styles.card}>
                    <Image
                      key={key}
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
        <section id="mespartenaires">Mes partenaires</section>
        <section>Contact</section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
