import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CarouselComponent from "../components/Carousel.js";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Presentation } from "../components/Presentation";
import styles from "../styles/Home.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaAngleUp } from "react-icons";

export const Home = () => {
  const [index, setIndex] = useState(0);

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
        <section id="mesrealisations" className={styles.mesrealisations}>
          <div className={styles.grid}>
            <h2 className={styles.h2}>Mes réalisations</h2>
            <CarouselComponent index={index} setIndex={setIndex} />
            <ul className={styles.ul}></ul>
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
