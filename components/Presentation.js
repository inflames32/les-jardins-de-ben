import Image from "next/image";
import styles from "../styles/Presentation.module.scss";

export const Presentation = () => {
  return (
    <div className={styles.presentation}>
      <div className={styles.profile}>
        <Image
          src="/images/ben.svg"
          alt="image 1"
          className={styles.images}
          width={350}
          height={350}
        />
      </div>
      <div className={styles.description}>
        <h2 className={styles.h2}>Qui est Ben ? </h2>
        <p className={styles.descriptionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde
          sequi hic corrupti obcaecati voluptates adipisci cupiditate placeat
          reiciendis, eos a ducimus veniam numquam quaerat
        </p>
      </div>
    </div>
  );
};
